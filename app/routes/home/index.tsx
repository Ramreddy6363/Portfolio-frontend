import type { Route } from './+types/index';
import { lazy, Suspense } from 'react';
import LatestPosts from '~/components/LatestPosts';
import RecentProjects from '~/components/RecentProjects';
import Hero from '~/components/Hero';
import { useNavigate } from 'react-router';
import type {
  Project,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from '~/types';
import type { Post } from '~/types';

// Lazy load heavy animation component
const ProfileCard = lazy(() => import('~/Animations/ProfileCard'));

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Ram Reddy - Full Stack Web Developer | React & Node.js Expert' },
    {
      name: 'description',
      content:
        'Professional full-stack web developer specializing in React, Node.js, and modern web technologies. View my portfolio of responsive websites and web applications.',
    },
    {
      name: 'keywords',
      content:
        'web developer, full stack developer, React developer, Node.js, JavaScript, TypeScript, portfolio, web design, frontend developer, backend developer',
    },
    { name: 'author', content: 'Ram Reddy' },

    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.pixcelcraftedbyram.tech/' },
    { property: 'og:title', content: 'Ram Reddy - Full Stack Web Developer' },
    {
      property: 'og:description',
      content:
        'Professional full-stack web developer specializing in React, Node.js, and modern web technologies.',
    },
    {
      property: 'og:image',
      content: 'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://www.pixcelcraftedbyram.tech/' },
    { name: 'twitter:title', content: 'Ram Reddy - Full Stack Web Developer' },
    {
      name: 'twitter:description',
      content:
        'Professional full-stack web developer specializing in React, Node.js, and modern web technologies.',
    },
    {
      name: 'twitter:image',
      content: 'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },
    { name: 'twitter:creator', content: '@Ramreddy6363' },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'English' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?pagination[limit]=3&sort[0]=date:desc&fields[0]=title&fields[1]=description&fields[2]=date&fields[3]=category&fields[4]=featured&fields[5]=url&populate[image][fields][0]=url`
    ),
    fetch(
      `${import.meta.env.VITE_API_URL}/posts?pagination[limit]=3&sort[0]=date:desc&fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=date&populate[image][fields][0]=url`
    ),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  }

  const projectJson: StrapiResponse<StrapiProject> = await projectRes.json();
  const postJson: StrapiResponse<StrapiPost> = await postRes.json();

  const projects = projectJson.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
  }));

  const posts = postJson.data.map((item) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    body: '', // Not needed for homepage - saves bandwidth
    image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
    date: item.date,
  }));

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center items-center my-8">
        <Suspense
          fallback={
            <div className="h-96 w-full max-w-md animate-pulse bg-gray-800 rounded-2xl" />
          }
        >
          <ProfileCard
            name="Ramreddy"
            title="Web Developer"
            handle="Ramreddy6363"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/images/profile.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => navigate('/contact')}
          />
        </Suspense>
      </div>
      <RecentProjects projects={projects} limit={3} />
      <LatestPosts posts={posts} />
    </>
  );
};

export default HomePage;
