import type { Project } from '~/types';
import { Link } from 'react-router';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link className="block group" to={`/projects/${project.documentId}`}>
      <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-blue-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
        {/* Image with overlay */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
          {/* Category badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full shadow-lg">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:from-blue-300 group-hover:to-purple-400 transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
            <span className="text-xs text-gray-400 flex items-center gap-1">
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
            <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors flex items-center gap-1">
              View Project
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
