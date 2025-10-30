import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import type { Route } from './+types/index';
import type { Post, StrapiResponse, StrapiPost } from '~/types';
import { Link } from 'react-router';
import { HiArrowSmLeft, HiCalendar } from 'react-icons/hi';
import { MdOutlineArticle } from 'react-icons/md';
import { useParams } from 'react-router';
import Loader from '~/components/Loader';

const BlogDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError('No blog slug provided');
      setIsLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
        );

        if (!response.ok) {
          setError('Blog post not found');
          setIsLoading(false);
          return;
        }

        const json: StrapiResponse<StrapiPost> = await response.json();

        if (!json.data || json.data.length === 0) {
          setError('Blog post not found');
          setIsLoading(false);
          return;
        }

        const item = json.data[0];
        const fetchedPost: Post = {
          id: item.id,
          title: item.title,
          slug: item.slug,
          date: item.date,
          excerpt: item.excerpt || '',
          author: 'Anonymous',
          body: item.body,
          image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        };

        setPost(fetchedPost);
      } catch (error) {
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto mt-10 px-6 py-6">
        <p className="text-red-500 text-center">{error}</p>
        <Link
          to="/blogs"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
        >
          <HiArrowSmLeft className="inline mr-1" />
          Back to Blogs
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto mt-10 px-6 py-6">
        <p className="text-red-500 text-center">Blog post not found.</p>
        <Link
          to="/blogs"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
        >
          <HiArrowSmLeft className="inline mr-1" />
          Back to Blogs
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-xl border border-gray-700">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl text-blue-300 font-extrabold mb-2 border-b border-gray-600 pb-2 flex items-center">
          <MdOutlineArticle className="mr-2 text-blue-400" />
          {post.title}
        </h1>
        <p className="text-gray-400 italic text-sm flex items-center">
          <HiCalendar className="mr-2 text-gray-500" />
          Published on {new Date(post.date).toISOString().split('T')[0]}
        </p>
      </header>

      {/* Featured Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
        onError={(e) => {
          e.currentTarget.src = '/images/no-image.png';
        }}
      />

      {/* Content */}
      <article className="prose prose-invert max-w-none mb-8 text-gray-300">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </article>

      {/* Navigation */}
      <Link
        to="/blogs"
        className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors"
      >
        <HiArrowSmLeft className="mr-2" />
        Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
