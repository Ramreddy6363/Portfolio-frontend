import { useState, useEffect } from 'react';
import { useLoaderData, Link } from 'react-router';
import type { Route } from './+types/details';
import type { Project, StrapiResponse, StrapiProject } from '~/types';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaTag,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Loader from '~/components/Loader';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { id } = params;

  if (!id) {
    throw new Response('Project ID is required', { status: 400 });
  }

  try {
    const apiUrl = import.meta.env.VITE_API_URL;

    // Try to fetch by documentId first, then by id
    let res = await fetch(
      `${apiUrl}/projects?filters[documentId][$eq]=${id}&populate=*`
    );
    let json: StrapiResponse<StrapiProject> = await res.json();

    // If no results with documentId, try with regular id
    if (!json.data || json.data.length === 0) {
      res = await fetch(`${apiUrl}/projects?filters[id][$eq]=${id}&populate=*`);

      if (res.ok) {
        json = await res.json();
      }
    }

    if (!res.ok) {
      throw new Response('Project not found', { status: 404 });
    }

    // Check if we have data and the first item exists
    if (!json.data || json.data.length === 0) {
      throw new Response('Project not found', { status: 404 });
    }

    const item = json.data[0];

    // Transform to normalized Project format
    const project: Project = {
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      description: item.description,
      image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
      url: item.url,
      category: item.category,
      date: item.date,
      featured: item.featured,
    };

    return project;
  } catch (error) {
    throw new Response('Failed to fetch project', { status: 500 });
  }
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData as Project;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 relative z-10">
        {/* Back Button with animation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-12 transition-all duration-300 group"
          >
            <FaArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Project Image with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover min-h-[400px] max-h-[600px]"
                onError={(e) => {
                  e.currentTarget.src = '/images/no-image.png';
                }}
              />
            </div>

            {/* Category Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-2"
            >
              <FaTag className="text-xs" />
              {project.category}
            </motion.span>

            {/* Featured Badge if applicable */}
            {project.featured && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute top-6 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm"
              >
                ⭐ FEATURED
              </motion.span>
            )}
          </motion.div>

          {/* Project Information with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Title with gradient */}
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-tight">
              {project.title}
            </h1>

            {/* Date with icon */}
            <div className="flex items-center gap-3 text-gray-400">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <FaCalendarAlt className="text-blue-400" />
                <span className="text-sm font-medium">
                  {new Date(project.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* Description with better styling */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Action Buttons with enhanced styling */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
              >
                <span>Visit Project</span>
                <FaExternalLinkAlt className="text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800/80 hover:bg-gray-700/80 text-gray-200 font-semibold rounded-xl border border-gray-700 hover:border-gray-600 backdrop-blur-sm transition-all duration-300"
              >
                <FaArrowLeft className="text-sm" />
                <span>Go Back</span>
              </motion.button>
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-gray-400 text-sm mb-1">Category</div>
                <div className="text-white font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 backdrop-blur-sm">
                <div className="text-gray-400 text-sm mb-1">Status</div>
                <div className="text-green-400 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Live
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
