import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

export const Hero3D = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl mx-auto text-center z-10">

        {/* Image principale - STABLE, SANS EFFETS */}
        <div className="mb-8 flex justify-center relative">
          {/* Cercle décoratif - masqué sur mobile */}
          <div className="hidden md:block absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
            />
          </div>
          
          {/* Image avec bordure */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 blur-xl opacity-50"></div>
              <img
                src="/images/Untitled.png"
                alt="Portrait de Sarra Hamila"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-slate-700/50 shadow-2xl"
                style={{
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)',
                }}
              />
            </motion.div>
          </div>
        </div>


        {/* Nom et titre - TEXTE PLUS PETIT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              SARRA HAMILA
            </span>
          </h1>

          <p className="text-base md:text-xl lg:text-2xl text-slate-300 mb-2">
            Développeuse Web & Designer Graphique
          </p>

          <p className="text-sm md:text-base lg:text-lg text-slate-400 max-w-xl mx-auto mb-10">
            Étudiante en 3ᵉ année de Licence Multimédia · ISITCom Sousse
          </p>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
          >
            <Mail size={18} />
            Me contacter
          </motion.button>

          <motion.a
            href="/cv-sarra-hamila.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-700/50 transition-colors"
          >
            <Download size={18} />
            CV
          </motion.a>

          <motion.a
            href="/lettre-motivation-sarra-hamila.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-700/50 transition-colors"
          >
            <Download size={18} />
            Lettre
          </motion.a>
        </motion.div>

        {/* Liens sociaux */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-6 justify-center mb-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={26} />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={26} />
          </motion.a>

          <motion.a
            href="mailto:sarrahmila18@gmail.com"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-slate-400 hover:text-purple-400 transition-colors"
          >
            <Mail size={26} />
          </motion.a>
        </motion.div>

        {/* Flèche de scroll */}
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowDown size={30} />
        </motion.button>
      </div>
    </section>
  );
};