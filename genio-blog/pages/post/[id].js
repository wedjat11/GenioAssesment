import Link from 'next/link';
import PostContent from '../../components/PostContent';
import Layout from '../../components/Layout';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/${params.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

const PostPage = ({ post }) => {
  return (
    <Layout>
      <PostContent post={post} />
      <div className="flex justify-center mt-8">
        <Link href="/" legacyBehavior>
          <button className="bg-red-500 hover:bg-red-700 text-grey-bg font-bold py-2 px-4 rounded">
            Regresar
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default PostPage;
