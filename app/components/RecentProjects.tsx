import { Link } from 'react-router';
import type { Project } from '~/types';
import ProjectCard from './ProjectCard';

interface RecentProjectsProps {
  projects: Project[];
  limit?: number;
}

const RecentProjects = ({ projects, limit = 3 }: RecentProjectsProps) => {
  // Sort projects by date in descending order (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  // Get the most recent projects based on the limit
  const recentProjects = sortedProjects.slice(0, limit);

  if (recentProjects.length === 0) {
    return (
      <section className="my-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Recent Projects</h2>
        </div>
        <p className="text-gray-400 text-center py-8">
          No projects available yet.
        </p>
      </section>
    );
  }

  return (
    <section className="my-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-6 w-full px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center">
          Recent Projects
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl px-4">
        {recentProjects.map((project) => (
          <div
            key={project.id}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px] max-w-[400px]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
