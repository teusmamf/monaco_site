import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Palette, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040404] via-[#0f41ea]/20 to-[#040404]" />
        
        {/* Cursor light effect */}
        <motion.div
          className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#0f41ea] opacity-20 blur-[100px]"
          animate={{
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5,
          }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Capacitando Marcas Através da Inovação
          </h1>
          <p className="text-xl md:text-2xl text-[#7c7c7c] mb-8">
            Transformamos sua presença digital com estratégias futuristas e execução criativa.
          </p>
          <button className="btn_hero">
          <Link
            to="/contato"
            
          >
            Vamos Elevar Sua Marca
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
           </button>
          
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#040404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Sobre a monaco.co</h2>
            <p className="text-lg text-[#7c7c7c] max-w-3xl mx-auto">
              A monaco.co é uma agência de marketing de ponta comprometida em impulsionar o sucesso das marcas através de estratégias digitais inovadoras e experiências imersivas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-[#040404] to-[#0f41ea]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#595959]/10 rounded-lg backdrop-blur-sm"
            >
              <Brain className="h-12 w-12 text-[#0f41ea] mb-4" />
              <h3 className="text-xl font-bold mb-2">Estratégia Digital</h3>
              <p className="text-[#7c7c7c]">Planos orientados por dados para navegar no cenário digital.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#595959]/10 rounded-lg backdrop-blur-sm"
            >
              <Palette className="h-12 w-12 text-[#0f41ea] mb-4" />
              <h3 className="text-xl font-bold mb-2">Desenvolvimento de Marca</h3>
              <p className="text-[#7c7c7c]">Criando histórias de marca envolventes que ressoam.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#595959]/10 rounded-lg backdrop-blur-sm"
            >
              <Share2 className="h-12 w-12 text-[#0f41ea] mb-4" />
              <h3 className="text-xl font-bold mb-2">Gestão de Mídias Sociais</h3>
              <p className="text-[#7c7c7c]">Campanhas inovadoras para impulsionar sua presença online.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#040404]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">O Que Nossos Clientes Dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-[#595959]/10 rounded-lg"
            >
              <p className="text-lg mb-4">
                "Trabalhar com a monaco.co transformou nossa identidade de marca. Sua abordagem inovadora é verdadeiramente incomparável."
              </p>
              <p className="font-bold">Ana Silva</p>
              <p className="text-[#7c7c7c]">CEO, TechBrasil</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-[#595959]/10 rounded-lg"
            >
              <p className="text-lg mb-4">
                "A equipe da monaco.co superou todas as nossas expectativas. Resultados excepcionais e profissionalismo impecável."
              </p>
              <p className="font-bold">Pedro Santos</p>
              <p className="text-[#7c7c7c]">Diretor de Marketing, Inova SP</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;