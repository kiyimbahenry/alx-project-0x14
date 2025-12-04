import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">MovieApp</h2>
            <p className="text-gray-400">Your ultimate movie database</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
          <p className="mt-2 text-sm">Powered by MoviesDatabase API</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
