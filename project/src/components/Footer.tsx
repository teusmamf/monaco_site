import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#040404] border-t border-[#595959]/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">monaco.co</h3>
            <p className="text-[#7c7c7c]">
              Transformando presenças digitais com estratégias inovadoras e execução criativa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#0f41ea] transition-colors">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-[#0f41ea] transition-colors">Serviços</Link></li>
              <li><Link to="/contato" className="hover:text-[#0f41ea] transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-[#7c7c7c]">
              <li>contato@monaco.co</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#0f41ea] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#0f41ea] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#0f41ea] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#0f41ea] transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#595959]/20 text-center text-[#7c7c7c]">
          <p>&copy; 2024 monaco.co. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;