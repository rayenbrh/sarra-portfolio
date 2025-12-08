import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Download, FileText, Play, Video } from 'lucide-react';
import { useState } from 'react';

export const CVVideo = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="cv-video" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              CV Vidéo
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Découvrez mon parcours et mes compétences en vidéo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vidéo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900/50">
              {/* Overlay décoratif */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 pointer-events-none"></div>
              
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    onClick={handlePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50"
                  >
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </motion.button>
                  
                  {/* Effet de pulsation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute w-20 h-20 bg-cyan-500 rounded-full"
                  />
                </div>
              ) : null}

              <video
                className="w-full h-full object-contain"
                controls
                autoPlay={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster="/images/cv-video-poster.jpg"
              >
                <source src="/cv-video.mp4" type="video/mp4" />
                <source src="/cv-video.webm" type="video/webm" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              </div>
            </div>

            {/* Badge vidéo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 flex items-center justify-center gap-2 text-slate-400"
            >
              <Video size={18} />
              <span className="text-sm">CV Vidéo - Présentation personnelle</span>
            </motion.div>
          </motion.div>

          {/* Contenu et téléchargements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-200">
                Documents à télécharger
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Téléchargez mon CV et ma lettre de motivation pour en savoir plus 
                sur mon parcours et mes compétences.
              </p>
            </div>

            {/* Boutons de téléchargement */}
            <div className="space-y-4">
              <motion.a
                href="/cv-sarra-hamila.pdf"
                download
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FileText className="text-cyan-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-200 mb-1">
                    Curriculum Vitae
                  </h4>
                  <p className="text-sm text-slate-400">
                    Télécharger mon CV au format PDF
                  </p>
                </div>
                <Download className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={20} />
              </motion.a>

              <motion.a
                href="/lettre-motivation-sarra-hamila.pdf"
                download
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <FileText className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-slate-200 mb-1">
                    Lettre de Motivation
                  </h4>
                  <p className="text-sm text-slate-400">
                    Télécharger ma lettre de motivation
                  </p>
                </div>
                <Download className="text-slate-400 group-hover:text-purple-400 transition-colors" size={20} />
              </motion.a>
            </div>

            {/* Informations supplémentaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-700/50"
            >
              <p className="text-sm text-slate-500">
                💡 <span className="text-slate-400">Astuce :</span> Regardez la vidéo pour une 
                présentation dynamique, ou téléchargez les documents pour une consultation détaillée.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

