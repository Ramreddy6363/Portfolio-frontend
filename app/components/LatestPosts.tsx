import { Link } from 'react-router';
import type { Post } from '~/types';

type LatestPostsProps = {
  posts: Post[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 3 }: LatestPostsProps) => {
  const sorted = [...posts].sort((a: Post, b: Post) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const latest = sorted.slice(0, limit);

  return (
    <section className="my-12 flex flex-col items-center">
      <div className="flex flex-col items-center mb-8 w-full px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent text-center flex items-center gap-2">
          <span className="text-4xl">📝</span>
          Latest Posts
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Thoughts, tutorials, and insights
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-7xl px-4">
        {latest.map((post) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px] max-w-[400px]"
          >
            <article className="relative h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-blue-500/20 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1">
              {/* Post image */}
              {post.image && (
                <div className="relative overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-3 group-hover:from-blue-300 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
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
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors flex items-center gap-1">
                    Read More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
