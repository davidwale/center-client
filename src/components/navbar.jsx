import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed top-0 w-full border-b bg-white z-50">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center justify-center">
            <span className="text-xl font-bold">Logo</span>
          </Link>
          <div className="hidden md:flex gap-6 ml-6">
            <Link to="/" className="flex items-center text-sm md:text-base justify-center">
              <span>About</span>
            </Link>
            <Link to="/" className="flex items-center text-sm md:text-base justify-center">
              <span>How It Works</span>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="/register" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
            Register
          </a>
          <a href="/login" className="text-green-600 bg-white px-4 py-2 rounded-md border-green-600 border transition-colors">
            Login
          </a>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col gap-2">
            <Link to="/" className="py-2" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/" className="py-2" onClick={toggleMenu}>
              How It Works
            </Link>
            <a href="/register" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-center" onClick={toggleMenu}>
              Register
            </a>
            <a href="/login" className="text-green-600 bg-white px-4 py-2 rounded-md border-green-600 border transition-colors text-center" onClick={toggleMenu}>
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

