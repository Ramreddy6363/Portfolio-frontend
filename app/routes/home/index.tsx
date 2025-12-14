import type { Route } from './+types/index';
import { useNavigate } from 'react-router';
import LatestPosts from '~/components/LatestPosts';
import RecentProjects from '~/components/RecentProjects';
import Hero from '~/components/Hero';
import BentoGrid from '~/components/BentoGrid';
import type {
  Project,
  StrapiPost,
  StrapiProject,
  StrapiResponse,
} from '~/types';
import type { Post } from '~/types';

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
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="relative z-10 space-y-8 md:space-y-12 pb-24">
        
        {/* Bento Grid (About / Socials / Stats) */}
        <BentoGrid />

        {/* Selected Works */}
        <div className="max-w-7xl mx-auto px-6">
             <RecentProjects projects={projects} limit={3} />
        </div>

        {/* Latest Thoughts */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-24">
             <LatestPosts posts={posts} />
        </div>

        {/* Minimal Footer CTA */}
        <section className="max-w-4xl mx-auto px-6 text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something great.</h2>
          <p className="text-gray-400 mb-8 text-lg">
             I'm currently available for freelance projects and open to new opportunities.
          </p>
          <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-gray-950 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105"
            >
              Start a Project
            </button>
        </section>

      </main>
    </div>
  );
};

export default HomePage;
