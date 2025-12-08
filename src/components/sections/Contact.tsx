import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Création du mailto avec les données du formulaire
    const mailtoLink = `mailto:sarrahmila18@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sarrahmila18@gmail.com',
      link: 'mailto:sarrahmila18@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '58 699 620',
      link: 'tel:58699620',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Rue Sidi Ben Hsan 4070, Tunisie',
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Me Contacter
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-200 mb-6">
                Restons en contact
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Je suis toujours ouverte aux nouvelles opportunités, collaborations 
                ou simplement pour échanger sur des projets passionnants. 
                N'hésitez pas à me contacter via le formulaire ou directement 
                par les moyens ci-dessous.
              </p>
            </div>

            {/* Coordonnées */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg group-hover:scale-110 transition-transform">
                        <info.icon className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                        <p className="text-slate-200 font-medium">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                      <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg">
                        <info.icon className="text-cyan-400" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400 mb-1">{info.label}</p>
                        <p className="text-slate-200 font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 transition-all"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-500/50 text-slate-400 hover:text-blue-400 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Objet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow"
              >
                <Send size={20} />
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};