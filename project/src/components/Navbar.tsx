import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Captura de tela 2025-02-24 094432.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-[#040404]/90 backdrop-blur-sm z-50 border-b border-[#595959]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className="logo_monaco" />
            <span className="text-xl font-bold">monaco.co</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-[#0f41ea] transition-colors">
              Início
            </Link>
            <Link to="/servicos" className="hover:text-[#0f41ea] transition-colors">
              Serviços
            </Link>
            <Link to="/contato" className="hover:text-[#0f41ea] transition-colors">
              Contato
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#dcdcdc] focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#040404] border-t border-[#595959]/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#0f41ea] transition-colors"
            >
              Início
            </Link>
            <Link
              to="/servicos"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#0f41ea] transition-colors"
            >
              Serviços
            </Link>
            <Link
              to="/contato"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#0f41ea] transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
