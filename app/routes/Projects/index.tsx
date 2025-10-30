import type { Route } from './+types/index';
import type { Project } from '~/types';
import ChromaGrid from '~/components/ChromaGrid';
import ProjectCard from '~/components/ProjectCard';
import { useState, useEffect } from 'react';
import type { ChromaItem } from '~/components/ChromaGrid';
import Pagination from '~/components/Pagination';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Loader from '~/components/Loader';

/**
 * Fetches all projects from Strapi API
 * @param apiUrl - The Strapi API base URL
 * @returns Promise resolving to projects data or null
 */
export async function fetchProjectsFromAPI(apiUrl: string): Promise<any> {
  try {
    const response = await fetch(`${apiUrl}/projects?populate=*`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error('Error fetching projects from API:', error);
  }
  return null;
}

/**
 * Transforms Strapi API project item to normalized Project format
 * @param item - Raw Strapi project item
 * @returns Normalized Project object
 */
function transformStrapiProject(item: any): Project {
  return {
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
}

/**
 * Normalizes project data from various sources into Project[] format
 * @param json - Raw project data from API or local file
 * @returns Normalized Project array
 */
function normalizeProjectsData(json: any): Project[] {
  if (!json) return [];

  // Handle direct array format
  if (Array.isArray(json)) {
    return json;
  }

  // Handle Strapi API format: { data: [...] }
  if (json?.data && Array.isArray(json.data)) {
    return json.data.map(transformStrapiProject);
  }

  // Handle local data format: { projects: [...] }
  if (Array.isArray(json?.projects)) {
    return json.projects;
  }

  return [];
}

const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const projectPerPage = 10;

  // Client-side data fetching
  useEffect(() => {
    const fetchData = async () => {
      try {
        let projectsData = null;

        // Only fetch from Strapi API
        if (import.meta.env.VITE_API_URL) {
          projectsData = await fetchProjectsFromAPI(
            import.meta.env.VITE_API_URL
          );
        }

        // Transform and set projects
        const transformedProjects = normalizeProjectsData(projectsData);
        setProjects(
          transformedProjects.length > 0 ? transformedProjects : null
        );
      } catch (error) {
        console.error('Error loading projects:', error);
        setProjects(null);
      }
    };

    const loadData = async () => {
      await fetchData();
      // Set loading to false after data is fetched and minimum load time
      setTimeout(() => setIsLoading(false), 1300);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  // get unique categories from projects
  const categories = ['All', ...new Set(projects?.map((p) => p.category))];
  // filter projects based on selected category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects?.filter((p) => p.category === selectedCategory);

  //calculate the total pages
  const totalPages = Math.ceil(
    (filteredProjects?.length || 0) / projectPerPage
  ); // Added null check for projects

  //get current projects
  const indexOfLastProject = currentPage * projectPerPage;
  const indexOfFirstProject = indexOfLastProject - projectPerPage;
  const currentProjects =
    filteredProjects?.slice(indexOfFirstProject, indexOfLastProject) || []; // Added null check for projects

  if (!currentProjects || currentProjects.length === 0) {
    return <p className="text-red-500 text-center">No projects found.</p>;
  }

  // Transform project data to match ChromaGrid format
  const chromaGridItems = currentProjects.map((project) => ({
    image: project.image,
    title: project.title,
    subtitle:
      project.description.length > 100
        ? `${project.description.substring(0, 100)}...`
        : project.description,
    url: `/projects/${project.id}`,
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #1E293B, transparent)',
    projectData: project,
  }));

  //pagination button render

  return (
    <>
      <div className="w-full">
        <h2 className="text-3xl text-white font-bold mb-8 text-center">
          🚀 Projects
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>
        {/* ChromaGrid Container */}
        <div className="relative w-full min-h-[400px] sm:min-h-[auto] mb-0 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChromaGrid
                items={chromaGridItems}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                renderItem={(item: ChromaItem) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={item.projectData} />
                  </motion.div>
                )}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ProjectPage;
