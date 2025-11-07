import type { Route } from './+types/index';
import ProfileCard from '~/Animations/ProfileCard';
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

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'PixelCrafted | Welcome' },
    { name: 'description', content: 'Custom website development' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: Post[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(
      `${import.meta.env.VITE_API_URL}/projects?sort[0]=date:desc&populate=*`
    ),
    fetch(`${import.meta.env.VITE_API_URL}/posts?sort[0]=date:desc&populate=*`),
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
    body: item.body,
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
      </div>
      <RecentProjects projects={projects} limit={3} />
      <LatestPosts posts={posts} />
    </>
  );
};

export default HomePage;
