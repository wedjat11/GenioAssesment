import Link from 'next/link';

const PostList = ({ posts }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Últimos Posts</h1>
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.id} className="py-4">
                <Link href={`/post/${post.id}`}>
                  {post.title.rendered}
                </Link>
                <p className="text-gray-600 mt-2">{post.excerpt.rendered}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostList;
