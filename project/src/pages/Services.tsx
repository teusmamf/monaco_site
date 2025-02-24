import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Palette, 
  Share2, 
  PenTool, 
  BarChart, 
  Globe,
  Mail,
  Users,
  Camera,
  Target,
  LineChart,
  TrendingUp
} from 'lucide-react';

const MainServiceCard = ({ icon: Icon, title, description, stats }) => (
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.02 }}
    className="col-span-1 md:col-span-2 p-8 bg-gradient-to-br from-[#0f41ea]/20 to-[#595959]/10 rounded-lg backdrop-blur-sm border border-[#0f41ea]/20 relative overflow-hidden"
  >
    <motion.div
      className="absolute inset-0 bg-[#0f41ea]"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.03 }}
      transition={{ duration: 0.3 }}
    />
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <Icon className="h-16 w-16 text-[#0f41ea] mb-4" />
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[#7c7c7c] mb-6">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 bg-[#0f41ea] text-white rounded-full hover:bg-[#0f41ea]/90 transition-colors"
        >
          Saiba Mais
        </motion.button>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-[#595959]/10 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                {stat.icon}
                <span className="text-sm text-[#7c7c7c]">{stat.label}</span>
              </div>
              <p className="text-2xl font-bold text-[#0f41ea]">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-8 bg-[#595959]/10 rounded-lg backdrop-blur-sm"
  >
    <Icon className="h-12 w-12 text-[#0f41ea] mb-4" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-[#7c7c7c]">{description}</p>
  </motion.div>
);

const Services = () => {
  const mainService = {
    icon: Target,
    title: "Anúncios Pagos (Google Ads & Meta Ads)",
    description: "Maximize seu ROI com campanhas de anúncios estratégicas e otimizadas. Nossa equipe especializada gerencia campanhas no Google Ads e Meta Ads para impulsionar suas conversões e alcançar resultados excepcionais.",
    stats: [
      {
        icon: <LineChart className="h-5 w-5 text-[#0f41ea]" />,
        label: "Média de ROAS",
        value: "8.5x"
      },
      {
        icon: <TrendingUp className="h-5 w-5 text-[#0f41ea]" />,
        label: "Aumento em Conversões",
        value: "+150%"
      },
      {
        icon: <Target className="h-5 w-5 text-[#0f41ea]" />,
        label: "Clientes Atendidos",
        value: "200+"
      },
      {
        icon: <BarChart className="h-5 w-5 text-[#0f41ea]" />,
        label: "Investimento Gerenciado",
        value: "10M+"
      }
    ]
  };

  const services = [
    {
      icon: Brain,
      title: "Estratégia Digital",
      description: "Desenvolvemos estratégias personalizadas baseadas em dados para maximizar sua presença digital e alcançar seus objetivos de negócio."
    },
    {
      icon: Palette,
      title: "Desenvolvimento de Marca",
      description: "Criamos identidades de marca memoráveis que capturam a essência do seu negócio e conectam com seu público-alvo."
    },
    {
      icon: Share2,
      title: "Gestão de Mídias Sociais",
      description: "Gerenciamos suas redes sociais com conteúdo envolvente e estratégias de crescimento orgânico."
    },
    {
      icon: PenTool,
      title: "Design Criativo",
      description: "Oferecemos soluções de design inovadoras que destacam sua marca no mercado digital."
    },
    {
      icon: Globe,
      title: "SEO e Conteúdo",
      description: "Melhoramos sua visibilidade online com estratégias de SEO e conteúdo relevante."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Desenvolvemos campanhas de email personalizadas para nutrir leads e converter clientes."
    },
    {
      icon: Users,
      title: "Gestão de Comunidade",
      description: "Construímos e gerenciamos comunidades engajadas em torno da sua marca."
    },
    {
      icon: Camera,
      title: "Produção de Conteúdo",
      description: "Criamos conteúdo visual e escrito de alta qualidade para todas as suas necessidades digitais."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-lg text-[#7c7c7c] max-w-3xl mx-auto">
            Oferecemos soluções completas de marketing digital para impulsionar seu negócio ao próximo nível.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MainServiceCard {...mainService} />
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;