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
    <section className="my-12">
      {/* Section header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-block px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs font-semibold text-purple-400 mb-3">
              LATEST INSIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Recent Articles
            </h2>
          </div>
          <Link
            to="/blogs"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            View all
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latest.map((post, index) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="group block animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <article className="relative h-full bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-1">
              {/* Image */}
              {post.image && (
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  
                  {/* Reading time badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded text-xs font-semibold text-white">
                    5 min read
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs text-gray-600">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  
                  <span className="flex items-center gap-1.5 text-xs font-medium text-purple-400 group-hover:gap-2.5 transition-all duration-300">
                    Read
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Mobile view all button */}
      <div className="mt-8 md:hidden text-center">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          View All Articles
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default LatestPosts;
