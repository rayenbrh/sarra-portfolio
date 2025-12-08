import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'timeline', label: 'Parcours' },
    { id: 'cv-video', label: 'CV Vidéo' },
    { id: 'about', label: 'À propos' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      // Si on a scrollé plus de 50px, activer le fond
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Détection de la section active avec Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Déclenche quand la section est dans le tiers supérieur
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (navItems.some(item => item.id === sectionId)) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observer toutes les sections
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    // Gérer le scroll pour le background
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Vérifier la section initiale
    const checkInitialSection = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };
    checkInitialSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(2, 6, 23, 0.98)' : 'transparent',
        backgroundImage: isScrolled 
          ? 'linear-gradient(to right, rgba(8, 51, 68, 0.8), rgba(15, 23, 42, 0.8), rgba(67, 20, 85, 0.8))'
          : 'none',
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(6, 182, 212, 0.5)' : 'none',
        boxShadow: isScrolled ? '0 10px 40px rgba(0, 0, 0, 0.7), 0 0 20px rgba(6, 182, 212, 0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
              SH
            </div>
            <span className="font-display font-bold text-lg text-slate-200 hidden sm:block">
              Sarra Hamila
            </span>
          </motion.button>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Boutons téléchargement desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="/cv-sarra-hamila.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow text-sm"
            >
              CV
            </motion.a>
            <motion.a
              href="/lettre-motivation-sarra-hamila.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-shadow text-sm"
            >
              Lettre
            </motion.a>
          </div>

          {/* Bouton menu mobile */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="flex flex-col gap-2 mt-4"
                >
                  <motion.a
                    href="/cv-sarra-hamila.pdf"
                    download
                    className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-center rounded-lg font-semibold"
                  >
                    Télécharger CV
                  </motion.a>
                  <motion.a
                    href="/lettre-motivation-sarra-hamila.pdf"
                    download
                    className="block w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center rounded-lg font-semibold"
                  >
                    Lettre de Motivation
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};