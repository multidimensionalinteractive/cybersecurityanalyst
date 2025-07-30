import Image from 'next/image';
import { useState } from 'react';
import Menu from './menu'; // Relative import since @/ might not be configured

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#experience" className="hover:text-gray-400">Experience</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </nav>
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <Menu isVisible={menuVisible} onClose={toggleMenu} />
    </header>
  );
};

export default Header;
