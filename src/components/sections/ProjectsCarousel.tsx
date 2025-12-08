import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { ExternalLink } from 'lucide-react';
import projectsData from '../../data/projects.json';

type FilterType = 'all' | 'web' | 'app' | 'video' | 'design';

const filterLabels: Record<FilterType, string> = {
  all: 'Tous',
  web: 'Web',
  app: 'Applications',
  video: 'Vidéo',
  design: 'Design',
};

export const ProjectsCarousel = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Une sélection de mes réalisations en développement et design
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {(Object.keys(filterLabels) as FilterType[]).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-slate-800/50 text-slate-400 hover:text-slate-200 border border-slate-700'
              }`}
            >
              {filterLabels[filter]}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(index)}
                className="group cursor-pointer bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Image du projet - VERSION AVEC IMG */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback si image manquante
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 items-center justify-center text-6xl font-bold text-slate-700"
                    style={{ display: 'none' }}
                  >
                    {project.title.charAt(0)}
                  </div>
                  
                  {/* Overlay sombre */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  
                  {/* Overlay au survol */}
                  <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="text-white"
                    >
                      <ExternalLink size={32} />
                    </motion.div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs bg-slate-700/50 text-slate-400 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Année */}
                  <div className="text-xs text-slate-500">
                    {project.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-slate-400"
          >
            Aucun projet dans cette catégorie pour le moment.
          </motion.div>
        )}

        {/* Modale de détails */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-slate-200">
                    {filteredProjects[selectedProject].title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-400 hover:text-slate-200 text-2xl"
                  >
                    ×
                  </button>
                </div>

                {/* Image dans la modale */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={filteredProjects[selectedProject].image} 
                    alt={filteredProjects[selectedProject].title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <p className="text-slate-300 mb-6">
                  {filteredProjects[selectedProject].description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-200 mb-3">Fonctionnalités</h4>
                  <ul className="space-y-2">
                    {filteredProjects[selectedProject].features.map((feature, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredProjects[selectedProject].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};