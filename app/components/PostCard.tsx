import type { Post } from '~/types';
import { Link } from 'react-router';

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="group h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500">
      {/* Image */}
      {post.image && (
        <div className="relative overflow-hidden h-48">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
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
              month: 'short',
              day: 'numeric',
            })}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <Link
          to={`/blogs/${post.slug}`}
          className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-cyan-400 transition-colors group/link"
        >
          <span>Read More</span>
          <svg
            className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
