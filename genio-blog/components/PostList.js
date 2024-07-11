import Link from 'next/link';

const PostList = ({ posts }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-red-300 text-center">Últimos Posts</h1>
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.id} className="py-4 text-red-500">
              <Link href={`/post/${post.id}`}>
                {post.title.rendered}
              </Link>
              <div className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
