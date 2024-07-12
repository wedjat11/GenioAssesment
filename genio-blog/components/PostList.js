import { useState } from 'react';
import Loader from './Loader';
import PostItem from './PostItem';
import Layout from './Layout';

const PostList = ({ posts }) => {
  const [loading, setLoading] = useState(false);

  const handlePostClick = () => {
    setLoading(true);
  };

  return (
    <Layout>
      <Loader loading={loading} />
      <h1 className="text-3xl font-sans mb-4 text-red-500 text-center">Últimos Posts</h1>
      <ul className="divide-y divide-gray-200">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </ul>
    </Layout>
  );
};

export default PostList;
