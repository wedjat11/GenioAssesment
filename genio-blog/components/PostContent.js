import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const PostContent = ({ post }) => {
  const cleanHTML = typeof window !== "undefined" ? DOMPurify.sanitize(post.content.rendered) : post.content.rendered;
  const parsedContent = parse(cleanHTML);

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-6 text-red-500">{post.title.rendered}</h1>
      <div className="post-content text-[#242423]">{parsedContent}</div>
    </article>
  );
};

export default PostContent;
