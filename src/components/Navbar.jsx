import { useState } from 'react';
import logo from '../assets/images/logo.png'
import { FaSearch, FaSignInAlt, FaBars } from 'react-icons/fa';

export const Navbar = ({ className, ...props }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`flex items-center justify-between pl-24 pr-24 pt-8 bg-white ${className}`}>
      <img className="w-32 h-16 object-contain" src={logo} alt="logo" />
      <div className="hidden md:flex space-x-8">
        <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Sobre nós</div>
        <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Contato</div>
        <div className="flex items-center space-x-1">
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Brechó</div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Acervo</div>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <FaSearch className="w-4 h-4 text-gray-700 hover:text-gray-900" />
        <div className="flex items-center space-x-2">
          <FaSignInAlt className="w-4 h-4 text-gray-700 hover:text-gray-900" />
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Login</div>
        </div>
      </div>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <FaBars
          className="w-4 h-4 text-gray-700 hover:text-gray-900 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white p-4 space-y-4">
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Sobre nós</div>
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Contato</div>
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Brechó</div>
          <div className="text-gray-700 hover:text-gray-900 cursor-pointer">Acervo</div>
        </div>
      )}
    </div>
  );
};