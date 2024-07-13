

import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-75 z-50">
      <ClipLoader size={50} color={"#EF4444"} loading={loading} />
    </div>
  );
};

export default Loader;

