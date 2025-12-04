import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faFilm} className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold">MovieApp</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/movies" className="hover:text-blue-400 transition-colors">Movies</a>
            <a href="/tv-shows" className="hover:text-blue-400 transition-colors">TV Shows</a>
            <a href="/search" className="hover:text-blue-400 transition-colors">Search</a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
