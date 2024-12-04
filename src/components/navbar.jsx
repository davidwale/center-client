import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-white z-50">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className='flex gap-6'>
          <a href="/" className="flex items-center justify-center">
            <span className="text-xl font-bold">Logo</span>
          </a>
          <a href="/" className="flex items-center text-sm md:text-base justify-center">
            <span className="">About</span>
          </a>
          <a href="/" className="flex items-center text-sm md:text-base justify-center">
            <span className="">How It works</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-green-600 text-white px-4 py-2 border-sm rounded-md hover:bg-green-700 transition-colors">
            <a href='/register'>
              Register
            </a>
          </button>
          <button className="text-green-600 bg-white px-4 py-2 border-sm rounded-md border-green-600 border transition-colors">
            <a href='/login'>
              Login
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

