// pages/index.js
import PostList from '../components/PostList';

export async function getServerSideProps() {
  const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

const Home = ({ posts }) => {
  return <PostList posts={posts} />;
};

export default Home;
