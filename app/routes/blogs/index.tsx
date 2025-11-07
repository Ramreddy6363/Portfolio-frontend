// import type { Route } from './+types/index';
import type { Post, StrapiPost, StrapiResponse } from '~/types';
import PostCard from '~/components/PostCard';
import { useState } from 'react';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';

export function meta() {
  return [
    { title: 'The Friendly Dev | Blog' },
    { name: 'description', content: 'Read my latest blog posts and articles' },
  ];
}

export async function loader(): Promise<{ posts: Post[] }> {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;

    const res = await fetch(`${apiUrl}/posts?sort[0]=date:desc&populate=*`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts: ${res.status}`);
    }

    const json = await res.json();

    // Check if data exists and is an array
    if (!json.data || !Array.isArray(json.data)) {
      return { posts: [] };
    }

    const posts: Post[] = json.data.map((item: StrapiPost) => {
      // Handle image URL - check if it starts with http or needs the base URL
      let imageUrl = '/images/no-image.png';
      if (item.image?.url) {
        imageUrl = item.image.url.startsWith('http')
          ? item.image.url
          : `https://portfoliobackend-iato.onrender.com${item.image.url}`;
      }

      return {
        id: String(item.id),
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        body: item.body,
        image: imageUrl,
        date: item.date,
      };
    });

    return { posts };
  } catch (error) {
    console.error('Error in loader:', error);
    return { posts: [] };
  }
}

const BlogPage = ({ loaderData }: { loaderData: { posts: Post[] } }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const { posts } = loaderData;

  // Filter posts based on search query
  const filteredPosts =
    posts?.filter(
      (post: Post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="w-full min-h-screen py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h1>
          <p className="text-xl text-gray-400 flex items-center justify-center gap-2">
            <span className="text-3xl">📝</span>
            Thoughts, tutorials, and insights
          </p>
        </div>

        {/* Search Filter */}
        <div className="max-w-2xl mx-auto mb-12">
          <PostFilter
            searchQuery={searchQuery}
            onSearchChange={(query) => {
              setSearchQuery(query);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Posts Grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post: Post) => (
                <div
                  key={post.slug}
                  className="transform transition-transform duration-300 hover:scale-105"
                >
                  <PostCard post={post} />
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
                {searchQuery
                  ? 'No blog posts found matching your search.'
                  : 'No blog posts available yet.'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
                >
                  Clear Search
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
