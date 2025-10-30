import type { Route } from './+types/index';
import type { Post } from '~/types';
import PostCard from '~/components/PostCard';
import { useState, useEffect } from 'react';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/Postfilter';
import { motion } from 'framer-motion';
import Loader from '~/components/Loader';
import { useLoaderData } from 'react-router';
import type { StrapiResponse } from '~/types';

// Transform Strapi post to Post format
function transformStrapiPost(item: any): Post {
  let imageUrl = '/images/no-image.png';

  if (item.image) {
    // Current Strapi v4 format - image object with direct url property
    if (item.image.url) {
      imageUrl = item.image.url.startsWith('http')
        ? item.image.url
        : `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`;
    }
    // Legacy Strapi format - nested under data.attributes
    else if (item.image.data?.attributes?.url) {
      imageUrl = `${import.meta.env.VITE_STRAPI_URL}${item.image.data.attributes.url}`;
    }
    // String format
    else if (typeof item.image === 'string') {
      imageUrl = item.image.startsWith('http')
        ? item.image
        : `${import.meta.env.VITE_STRAPI_URL}${item.image}`;
    }
  }

  // Ensure we always have a string for the image URL
  imageUrl = String(imageUrl);

  const result = {
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    excerpt: item.excerpt,
    author: item.author || 'Anonymous',
    image: imageUrl,
  };

  return result;
}

// Blog page component with search, pagination, and loading states
const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const loaderData = useLoaderData<StrapiResponse<Post>>();
  const posts = loaderData.data;

  // Ensure posts is always an array and filter out any null/undefined items
  const validPosts = Array.isArray(posts)
    ? posts.filter((post) => post != null)
    : [];

  const filteredPosts = posts.filter(
    (post) =>
      post &&
      post.title &&
      post.excerpt &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg">
      <motion.h2
        className="text-4xl text-center text-blue-300 font-extrabold mb-5 tracking-wide flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        📝 Blogs
      </motion.h2>
      <div className="relative mb-6">
        <PostFilter
          searchQuery={searchQuery}
          onSearchChange={(query) => {
            setSearchQuery(query);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="space-y-8">
        {currentPosts.map((post: Post) => (
          <motion.div
            key={post.slug}
            className="rounded-lg p-4 hover:bg-gray-700 transition-colors duration-300 shadow-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <PostCard post={post} />
          </motion.div>
        ))}
        {posts.length > 0 && filteredPosts.length === 0 && (
          <motion.div
            className="text-gray-400 text-center flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg">
              No blog posts available at the moment. Please check back later.
            </p>
          </motion.div>
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export async function loader() {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(
      `${apiUrl}/posts?populate=image&sort=date:desc`
    );
    if (response.ok) {
      const data = await response.json();
      // Transform the posts to ensure proper image URLs
      if (data?.data && Array.isArray(data.data)) {
        const transformedPosts = data.data.map(transformStrapiPost);
        return { data: transformedPosts };
      }
      return data;
    } else {
      throw new Response('Failed to fetch posts', { status: response.status });
    }
  } catch (error) {
    throw new Response('Failed to fetch posts', { status: 500 });
  }
}

export default BlogPage;
