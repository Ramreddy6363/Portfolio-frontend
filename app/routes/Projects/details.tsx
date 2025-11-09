import type { Route } from './+types/details';
import type { Project, StrapiProject, StrapiResponse } from '~/types';
import { Link } from 'react-router';

export function meta({ data }: Route.MetaArgs) {
  const project = data?.project;

  if (!project) {
    return [
      { title: 'Project Not Found | Ram Reddy Portfolio' },
      { name: 'robots', content: 'noindex' },
    ];
  }

  const projectUrl = `https://www.pixcelcraftedbyram.tech/projects/${project.documentId}`;

  return [
    { title: `${project.title} - Web Development Project | Ram Reddy` },
    {
      name: 'description',
      content:
        project.description ||
        `Explore ${project.title}, a web development project by Ram Reddy.`,
    },
    {
      name: 'keywords',
      content: `${project.category || 'web development'}, React project, portfolio, ${project.title}`,
    },
    { name: 'author', content: 'Ram Reddy' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: projectUrl },
    {
      property: 'og:title',
      content: `${project.title} - Web Development Project`,
    },
    { property: 'og:description', content: project.description || '' },
    {
      property: 'og:image',
      content:
        project.image ||
        'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: projectUrl },
    { name: 'twitter:title', content: project.title },
    { name: 'twitter:description', content: project.description || '' },
    {
      name: 'twitter:image',
      content:
        project.image ||
        'https://www.pixcelcraftedbyram.tech/images/profile.png',
    },
    { name: 'twitter:creator', content: '@Ramreddy6363' },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
  ];
}

export async function loader({
  params,
}: Route.LoaderArgs): Promise<{ project: Project | null }> {
  const { id } = params;

  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/projects/${id}?populate=*`
    );

    if (!res.ok) {
      return { project: null };
    }

    const json: { data: StrapiProject } = await res.json();

    const project: Project = {
      id: json.data.id,
      documentId: json.data.documentId,
      title: json.data.title,
      description: json.data.description,
      image: json.data.image?.url
        ? `${json.data.image.url}`
        : '/images/no-image.png',
      url: json.data.url,
      date: json.data.date,
      category: json.data.category,
      featured: json.data.featured,
    };

    return { project };
  } catch (error) {
    console.error('Error fetching project:', error);
    return { project: null };
  }
}

const ProjectDetailPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData;

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Project Not Found
        </h2>
        <p className="text-gray-400 mb-6">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Projects
      </Link>

      {/* Project header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-4 py-1.5 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
            {project.category}
          </span>
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {new Date(project.date).toLocaleDateString()}
          </span>
        </div>

        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          {project.title}
        </h1>
      </div>

      {/* Project image */}
      <div className="relative rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-blue-500/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      {/* Project description */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-blue-500/20 rounded-xl p-8 mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          About This Project
        </h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {project.description}
        </p>
      </div>

      {/* Project link */}
      {project.url && (
        <div className="flex justify-center">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Live Project
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
