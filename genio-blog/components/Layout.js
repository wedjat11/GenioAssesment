import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
        <Navbar />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-4/5 mx-auto p-8">
          {children}
        </div>
      </div>
      </>
        
    );
  };
  
  export default Layout;
  