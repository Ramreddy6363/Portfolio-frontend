import type { Project } from '../types';
import { Link } from 'react-router';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      className="block transform transition duration-300  hover:scale-105"
      to={`/projects/${project.id}`}
    >
      <div className="bg-gray-700 border border-gray-800 rounded-lg overflow-hidden shadow-sm transition hover:scale-[1.05]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-blue-400 mb-1 backdrop-blur-md  p-2 rounded-lg">
            {project.title}
          </h3>
          <p className="text-sm text-gray-300 mb-2">
            {project.excerpt
              ? project.excerpt
              : project.description && project.description.length > 30
                ? `${project.description.substring(0, 30)}...`
                : project.description}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{project.category}</span>
            <span>{new Date(project.date).toISOString().split('T')[0]}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
