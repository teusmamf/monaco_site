import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Vamos Conectar</h1>
          <p className="text-lg text-[#7c7c7c] max-w-3xl mx-auto">
            Sua jornada para o sucesso começa aqui. Entre em contato conosco e descubra como podemos transformar sua presença digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#0f41ea] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-[#7c7c7c]">contato@monaco.co</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#0f41ea] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                <p className="text-[#7c7c7c]">+55 (11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#0f41ea] mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Localização</h3>
                <p className="text-[#7c7c7c]">
                  Av. Paulista, 1000<br />
                  São Paulo - SP<br />
                  Brasil
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#595959]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f41ea]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#595959]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f41ea]"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#595959]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f41ea]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 bg-[#595959]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f41ea]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 bg-[#0f41ea] text-white rounded-lg hover:bg-[#0f41ea]/90 transition-colors"
            >
              Enviar Mensagem
              <Send className="ml-2 h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;