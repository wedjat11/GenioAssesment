import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fernandafamiliar.soy/wp-json/wp/v2/posts/${params.id}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  const cleanHTML = DOMPurify.sanitize(post.content.rendered);
  const parsedContent = parse(cleanHTML);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 mx-auto p-8 text-black">
        <article className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
          <div>{parsedContent}</div>
        </article>
      </div>
    </div>
  );
};

export default Post;
