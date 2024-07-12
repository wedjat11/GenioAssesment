import Link from 'next/link';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const PostItem = ({ post, onClick }) => {
  const cleanExcerpt = typeof window !== "undefined" ? DOMPurify.sanitize(post.excerpt.rendered) : post.excerpt.rendered;
  const parsedExcerpt = parse(cleanExcerpt);

  return (
    <li className="py-10 text-red-500 text-justify">
      <Link href={`/post/${post.id}`} passHref legacyBehavior>
        <a onClick={onClick} className="text-xl font-medium text-gray-800 hover:text-red-500">
          {post.title.rendered}
        </a>
      </Link>
      <div className="text-gray-600 mt-2">
        {parsedExcerpt}
      </div>
    </li>
  );
};

export default PostItem;
