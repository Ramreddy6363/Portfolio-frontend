import type { Route } from './+types/index';
import type { Project, StrapiProject, StrapiResponse } from '~/types';
import ProjectCard from '~/components/ProjectCard';
import { useState } from 'react';
import Pagination from '~/components/Pagination';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Web Development Projects Portfolio | Ram Reddy' },
    {
      name: 'description',
      content:
        'Explore my portfolio of web development projects featuring React applications, full-stack websites, and modern web solutions. See real examples of my work and technical expertise.',
    },
    {
      name: 'keywords',
      content:
        'web development projects, React projects, portfolio, web applications, frontend projects, full stack projects, JavaScript projects',
    },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.pixcelcraftedbyram.tech/projects' },
    {
      property: 'og:title',
      content: 'Web Development Projects Portfolio | Ram Reddy',
    },
    {
      property: 'og:description',
      content:
        'Explore my portfolio of web development projects featuring React applications, full-stack websites, and modern web solutions.',
    },
    {
      property: 'og:image',
      content: 'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Web Development Projects Portfolio' },
    {
      name: 'twitter:description',
      content:
        'Explore my portfolio of web development projects and technical expertise.',
    },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/projects?sort[0]=date:desc&populate=*`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  const json: StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
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

  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  const { projects } = loaderData;

  // Get unique categories
  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  // Filter projects based on category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current page projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  return (
    <div className="w-full min-h-screen py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 flex items-center justify-center gap-2">
            <span className="text-3xl">🚀</span>
            Explore my latest work and creations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/50 transform -translate-y-1'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {currentProjects.length > 0 ? (
          <>
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {currentProjects.map((project) => (
                <div
                  key={project.documentId}
                  className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[400px] transform transition-transform duration-300 hover:scale-105"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-12 max-w-md mx-auto border border-gray-800">
              <div className="text-6xl mb-6">🔍</div>
              <p className="text-gray-400 text-xl">
                No projects found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
