import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';
import timelineData from '../../data/timeline.json';

const typeIcons = {
  education: GraduationCap,
  experience: Briefcase,
  project: Rocket,
};

const typeColors = {
  education: 'from-blue-500 to-cyan-500',
  experience: 'from-purple-500 to-pink-500',
  project: 'from-cyan-500 to-teal-500',
};

export const Timeline = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="timeline" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Parcours
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Mon évolution académique, mes expériences et mes projets marquants
          </p>
        </motion.div>

        {/* Timeline verticale */}
        <div className="relative">
          {/* Ligne centrale */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          {/* Items de timeline */}
          <div className="space-y-16">
            {timelineData.timeline.map((item, index) => {
              const Icon = typeIcons[item.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Point central */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${typeColors[item.type]} flex items-center justify-center shadow-lg`}
                      style={{
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                      }}
                    >
                      <Icon className="text-white" size={24} />
                    </motion.div>
                  </div>

                  {/* Contenu */}
                  <div className={`ml-28 md:ml-0 md:w-5/12 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {/* Année */}
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 rounded-full text-sm text-cyan-400 font-semibold mb-3">
                        {item.year}
                      </div>

                      {/* Titre et organisation */}
                      <h3 className="text-xl font-bold text-slate-200 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 mb-3">
                        {item.organization}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Points clés */}
                      <ul className={`space-y-1 text-sm text-slate-400 ${isLeft ? 'md:text-right' : ''}`}>
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {!isLeft && <span className="text-cyan-400 mt-1">•</span>}
                            <span>{highlight}</span>
                            {isLeft && <span className="text-cyan-400 mt-1 md:order-first md:ml-auto">•</span>}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Badge final */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-full">
            <p className="text-slate-300">
              ✨ Et ce n'est que le début de l'aventure...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};