import PostList from '../components/PostList';

export async function getServerSideProps() {
  const res = await fetch('https://fernandafamiliar.soy/wp-json/wp/v2/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}

const HomePage = ({ posts }) => {
  return <PostList posts={posts} />;
};

export default HomePage;
