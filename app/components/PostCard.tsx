import { Link } from 'react-router';
import type { Post } from '~/types';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article
      key={post.id}
      className="bg-gray-700 p-6 rounded-lg shadow-md mb-4"
    >
      <h3 className="text-2xl text-blue-400 font-semibold mb-2">
        {post.title}
      </h3>
      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toISOString().split('T')[0]}
        {post.author && <span> • by {post.author}</span>}
      </p>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-md mb-4"
          onError={(e) => {
            // Handle broken image gracefully
            e.currentTarget.src = '/images/no-image.png';
          }}
        />
      )}
      <p className="text-gray-300 mb-4">{post.excerpt}</p>
      <Link
        to={`/blogs/${post.slug}`}
        className="text-gray-200 hover:bg-blue-600 px-2 py-2 bg-blue-700 rounded transition-colors duration-200"
      >
        Read more
      </Link>
    </article>
  );
};

export default PostCard;
