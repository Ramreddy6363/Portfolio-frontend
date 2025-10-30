import { Link } from 'react-router';
import type { Post } from '~/types';

type LatestPostsProps = {
  posts: Post[] | null;
  Limit: number;
};

const LatestPosts = ({ posts, Limit = 3 }: LatestPostsProps) => {
  const sortedPosts = posts
    ? [...posts].sort(
        (a: Post, b: Post) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    : [];

  const Latest = sortedPosts.slice(0, Limit);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">
        📭Latest Posts
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">
        {Latest.map((post) => (
          <Link
            to={`/blogs/${post.slug}`}
            key={post.slug}
            className="block border p-4 border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:shadow-md transition hover:scale-105 "
          >
            <h3 className="text-lg font-semibold text-blue-500 mb-1">
              {post.title}
            </h3>
            <p className="text-sm text-gray-400">{post.excerpt}</p>
            <span className="block mt-3 text-xs text-gray-400">
              {new Date(post.date).toISOString().split('T')[0]}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
