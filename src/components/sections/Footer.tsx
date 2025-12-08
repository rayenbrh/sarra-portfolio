import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-slate-400 flex items-center gap-2 flex-wrap justify-center md:justify-start">
              © {currentYear} Sarra Hamila · Développé avec
              <Heart className="text-red-500 animate-pulse" size={16} />
              et React + TypeScript
            </p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 text-sm"
          >
            <a
              href="#hero"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#projects"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </motion.div>

          {/* Bouton retour en haut */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: 0.2 }}
            className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        {/* Mentions légales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-6 border-t border-slate-800/50 text-center"
        >
          <p className="text-xs text-slate-500">
            Portfolio personnel · Tous droits réservés · 
            <a href="mailto:sarrahmila18@gmail.com" className="hover:text-cyan-400 transition-colors ml-1">
              sarrahmila18@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};