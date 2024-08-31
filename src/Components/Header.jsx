import React from 'react';
import Container from '../Layer/Container';
import logo from '../../src/assets/logo.png'

const Header = () => {
  return (
    <Container>
      <div className="mx-auto flex justify-between items-center py-4 px-8">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex space-x-6 text-[16px]">
            <li><a href="#about" className="hover:text-orange-500 font-medium">Home</a></li>
            <li><a href="#about" className="hover:text-orange-500 font-medium">About</a></li>
            <li><a href="#services" className="hover:text-orange-500 font-medium">Services</a></li>
            <li><a href="#portfolio" className="hover:text-orange-500 font-medium">Portfolio</a></li>
            <li><a href="#portfolio" className="hover:text-orange-500 font-medium">Price</a></li>
            <li><a href="#blog" className="hover:text-orange-500 font-medium">Blog</a></li>
          </ul>
        </nav>
        <a href="#contact" className="bg-orange-500 text-white px-4 py-3 rounded-full hover:bg-orange-600">Contact Us</a>
      </div>
    </Container>
  );
};

export default Header;
