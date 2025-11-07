// import type { Route } from './+types/details';
import type { Post, StrapiPost } from '~/types';
import { Link } from 'react-router';

export async function loader({
  params,
}: {
  params: { slug: string };
}): Promise<{ post: Post | null }> {
  try {
    const slug = params.slug;
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch post');
    }

    const json = await res.json();

    if (!json.data || json.data.length === 0) {
      return { post: null };
    }

    const item: StrapiPost = json.data[0];

    // Handle image URL
    let imageUrl = '/images/no-image.png';
    if (item.image?.url) {
      imageUrl = item.image.url.startsWith('http')
        ? item.image.url
        : `https://portfoliobackend-iato.onrender.com${item.image.url}`;
    }

    const post: Post = {
      id: String(item.id),
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug,
      date: item.date,
      body: item.body,
      image: imageUrl,
    };

    return { post };
  } catch (error) {
    console.error('Error loading post:', error);
    return { post: null };
  }
}

const BlogDetailPage = ({
  loaderData,
}: {
  loaderData: { post: Post | null };
}) => {
  const { post } = loaderData;

  if (!post) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center py-16 px-4">
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl p-12 max-w-md mx-auto border border-gray-800 text-center">
          <div className="text-6xl mb-6">😕</div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Post Not Found
          </h1>
          <p className="text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Blogs</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="w-full min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 mb-8 transition-colors group"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-semibold">Back to Blogs</span>
        </Link>

        {/* Blog Content Card */}
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-[400px] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            </div>
          )}

          {/* Content */}
          <div className="p-8 lg:p-12">
            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
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
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed italic border-l-4 border-blue-500 pl-6">
              {post.excerpt}
            </p>

            {/* Body */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                {post.body}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/blogs"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailPage;
