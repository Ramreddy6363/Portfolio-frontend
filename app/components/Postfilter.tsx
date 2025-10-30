type postFilterProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: postFilterProps) => {
  return (
    <div className="mb-4">
      <input
        id="post-search"
        name="postSearch"
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search posts..."
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default PostFilter;
