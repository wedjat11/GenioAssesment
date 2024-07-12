import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black-navbar p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="ext-grey-bg text-lg font-bold">
          Genio Assesment
        </div>
        <div className="flex space-x-4">
          <a href="https://fernandafamiliar.soy" target="_blank" rel="noopener noreferrer" className="text-grey-bg  text-lg font-bold hover:text-red-500">
            Visita el blog
          </a>
          <a href="https://github.com/wedjat11/GenioAssesment" target="_blank" rel="noopener noreferrer" className="text-grey-bg text-lg font-bold hover:text-red-500">
            Accede al codigo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
