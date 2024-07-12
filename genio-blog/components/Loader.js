import { ClipLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  if (!loading) return null;
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <ClipLoader size={50} color={"#EF4444"} loading={loading} />
    </div>
  );
};

export default Loader;
