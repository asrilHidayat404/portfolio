import { useState } from 'react';
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
import Login from '../pages/Login';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = localStorage.getItem("loggedIn")
  console.log(auth)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    aboutElement.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <header className="fixed top-0 w-full bg-gray-800 opacity-90 border-b border-b-violet-50 z-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-around items-center">
        <div className="flex items-center justify-around">
          <div className='overflow-hidden'>
            <img src={Logo} alt='logo' className='hover:-hue-rotate-180 duration-500 transition-all cursor-pointer' width="100px"/>
          </div>
          <button className="text-white ml-4 lg:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
        <nav className={`lg:flex lg:items-center pb-10 lg:pb-0 gap-7 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="text-white hover:text-gray-300 block lg:inline-block lg:mt-0 mt-4">Home</Link>
          <Link to="/#about" onClick={() => scrollToAbout()} className="text-white hover:text-gray-300 block lg:inline-block lg:mt-0 mt-4">About</Link>
          <Link to={auth ? "/my-projects" : "/log-in"} className="text-white hover:text-gray-300 block lg:inline-block lg:mt-0 mt-4">My Projects</Link>
          <Link href="#" className="text-white hover:text-gray-300 block lg:inline-block lg:mt-0 mt-4">Gallery</Link>
          <Link href="#" className="text-white hover:text-gray-300 block lg:inline-block lg:mt-0 mt-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
