import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import  Logo  from '../assets/Captura de tela 2025-02-24 094432.png';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-[#040404]/90 backdrop-blur-sm z-50 border-b border-[#595959]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" className='logo_monaco'/>
            <span className="text-xl font-bold">monaco.co</span>
          </Link>
          
          <div className="flex space-x-8">
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
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;