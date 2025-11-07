import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

export interface ProjectItem {
  image: string;
  title: string;
  subtitle: string;
  handle?: string;
  location?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  projectData?: any;
}

export interface ProjectGridProps {
  items: ProjectItem[];
  className?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ items, className = '' }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: i * 0.2, ease: 'easeOut' }}
          className="cursor-pointer"
        >
          <Link
            to={item.url || '#'}
            className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
              {item.handle && (
                <span className="text-blue-400 text-sm">{item.handle}</span>
              )}
              {item.location && (
                <span className="text-gray-500 text-sm ml-2">
                  {item.location}
                </span>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
