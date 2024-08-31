import React from 'react';
import logo from '../assets/logo.png';
import Container from '../Layer/Container';

const Footer = () => {
  return (
    <Container>
      <div className="mx-auto mt-40">
        <div className="flex flex-wrap">
          <div className="w-full md:w-5/12 mb-6 md:mb-0">
            <div className="footer1">
              <div className="footer-logo mb-4">
                <img src={logo} alt="footer-logo" className="h-12" />
              </div>
              <p className="text-gray-400 w-[449px] mt-10">
                Install any demo or template with a single click. You can mix and
                match all the demos & templates. Every demo can be turned into
                one or multi-page.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/12 mb-6 md:mb-0">
            <div className="footer2">
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Benefit</li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-3/12 mb-6 md:mb-0">
            <div className="footer2">
              <h3 className="text-lg font-semibold mb-3">Products</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Task Management</li>
                <li>Company Growth</li>
                <li>Time Tracking</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-2/12">
            <div className="footer4">
              <h3 className="text-lg font-semibold mb-3">Support</h3>
              <ul className="text-gray-400 space-y-2">
                <li>Customer Service</li>
                <li>Accessibility</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6">
          <div className="flex justify-between items-center">
            <div className="copy1">
              <p className="text-gray-400">&copy; 2024 Innovate. All rights reserved.</p>
            </div>
            <div className="copy2 flex space-x-4">
              <p className="text-gray-400">Privacy Policy</p>
              <p className="text-gray-400">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    
    </Container>
  );
};

export default Footer;
