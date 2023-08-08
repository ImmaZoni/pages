import React from 'react';
import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

const Header: React.FC = () => {
  return (
    <nav className="container font-['Montserrat'] mb-[50px] px-4 xl:px-0 sm:mx-auto text-white rounded-xl bg-[#241235] dark:bg-[#1E254E] shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center text-2xl font-bold">
            <Link to="/">
              <LogoIcon />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="py-5 px-3 text-white hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="py-5 px-3 text-white hover:text-gray-900">
              About
            </Link>
            <Link to="/search-rewards-csv" className="py-5 px-3 text-white hover:text-gray-900">
              Search Rewards
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
