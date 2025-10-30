import type { Route } from './+types/index';
import Hero from '~/components/Hero';
import ProjectCard from '~/components/ProjectCard';
import type { Project } from '~/types';
import ProfileCard from '~/Animations/ProfileCard';
import profileImage from '/images/pofile.png';
import type { Post, StrapiResponse, StrapiProject, StrapiPost } from '~/types';
import LatestPosts from '~/components/LatestPosts';
import ChromaGrid from '~/components/ChromaGrid';
import { fetchProjectsFromAPI } from '../Projects/index';
import { useLoaderData } from 'react-router';
import Loader from '~/components/Loader';
import { useState, useEffect } from 'react';

// SEO Meta
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'PixcelCrafted | welcome' },
    { name: 'description', content: 'Welcome to PixcelCrafted!' },
  ];
}

// Fetch posts from Strapi
async function fetchPostsFromAPI(
  apiUrl: string
): Promise<StrapiResponse<StrapiPost> | null> {
  try {
    const response = await fetch(
      `${apiUrl}/posts?populate=image&sort=date:desc`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.warn(`API Error: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.warn('API not available - Strapi server may not be running');
    return null;
  }
}

// Transform Strapi post data
function transformStrapiPost(item: StrapiPost): Post {
  let imageUrl = '/images/no-image.png';

  if (item.image && item.image.url) {
    imageUrl = `${item.image.url}`;
  }

  return {
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    excerpt: item.excerpt || '',
    author: 'Anonymous',
    image: imageUrl,
  };
}

// Transform Strapi project data
function transformStrapiProject(item: StrapiProject): Project {
  return {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    category: item.category,
    date: item.date,
    featured: item.featured,
  };
}

// Normalize project data and return first 2 projects
function normalizeProjects(
  projectsJson:
    | StrapiResponse<StrapiProject>
    | Project[]
    | { projects: Project[] }
    | null
): Project[] {
  if (!projectsJson) return [];

  let projects: Project[] = [];

  // Handle direct array
  if (Array.isArray(projectsJson)) {
    projects = projectsJson;
  }
  // Handle Strapi API response
  else if (
    projectsJson &&
    'data' in projectsJson &&
    Array.isArray(projectsJson.data)
  ) {
    projects = projectsJson.data.map(transformStrapiProject);
  }
  // Handle local data format
  else if (
    projectsJson &&
    'projects' in projectsJson &&
    Array.isArray(projectsJson.projects)
  ) {
    projects = projectsJson.projects;
  }

  // Return first 2 projects (already limited by API call)
  return projects.slice(0, 2);
}

// Home page data loader
export async function loader({ request }: Route.LoaderArgs): Promise<{
  projects: Project[] | null;
  posts: Post[] | null;
}> {
  // Initialize with safe defaults
  let projectsJson: StrapiResponse<StrapiProject> | null = null;
  let postsData: StrapiResponse<StrapiPost> | null = null;

  // Only try to fetch if API URL is available
  if (import.meta.env.VITE_API_URL) {
    try {
      projectsJson = await fetchProjectsFromAPI(import.meta.env.VITE_API_URL);
      postsData = await fetchPostsFromAPI(import.meta.env.VITE_API_URL);
    } catch (error) {
      console.error('Failed to fetch data from API:', error);
      // Continue with null values - will be handled gracefully below
    }
  }

  // Normalize data to ensure consistency between server and client
  const projects = normalizeProjects(projectsJson);
  const posts = postsData?.data?.map(transformStrapiPost) || [];

  // Return a snapshot of the data
  return {
    projects,
    posts,
  };
}

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { projects, posts } = useLoaderData<{
    projects: Project[] | null;
    posts: Post[] | null;
  }>();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* Projects Section */}
      {projects && projects.length > 0 && (
        <section className="mb-8">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100">
              Recent Projects
            </h2>
          </div>
          <ChromaGrid
            items={projects.map((project) => ({
              image: project.image,
              title: project.title,
              subtitle:
                project.description.length > 100
                  ? `${project.description.substring(0, 100)}...`
                  : project.description,
              url: `/projects/${project.id}`,
              borderColor: '#FFD700',
              gradient: 'linear-gradient(145deg, #1E293B, transparent)',
              projectData: project,
            }))}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </section>
      )}

      <div className="flex justify-center items-center mt-2">
        <ProfileCard
          name="Ramreddy"
          title="web developer"
          status="Online"
          contactText="Contact Me"
          avatarUrl={profileImage}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
        />
      </div>
      <LatestPosts posts={posts} Limit={3} />
    </>
  );
};

export default HomePage;
