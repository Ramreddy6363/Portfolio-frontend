import type { Project } from '~/types';
import ProjectCard from './ProjectCard';
import { IoSparkles } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ChromaGrid from './ChromaGrid';
import type { ChromaItem } from './ChromaGrid';

type FeaturedProjectProps = {
  projects: Project[] | null;
  count: number;
};

const FeaturedProject = ({ projects, count = 4 }: FeaturedProjectProps) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  const chromaGridItems: ChromaItem[] = projects.map((project) => ({
    image: project.image,
    title: project.title,
    subtitle: project.description,
    url: `/projects/${project.id}`,
    borderColor: '#FFD700',
    gradient: 'linear-gradient(145deg, #1E293B, transparent)',
    projectData: project,
  }));

  return (
    <section className="text-2xl font-bold mb-6 text-gray-200">
      <div className="flex items-center justify-center mb-4">
        <IoSparkles className="text-blue-400 mr-2" size={24} />
        <h2>Recent Projects</h2>
      </div>
      <ChromaGrid
        items={chromaGridItems}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </section>
  );
};

export default FeaturedProject;
