import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import skillsData from '../../data/skills.json';
import * as Icons from 'lucide-react';

const iconMap: Record<string, any> = {
  code: Icons.Code,
  'code-2': Icons.Code2,
  palette: Icons.Palette,
  zap: Icons.Zap,
  component: Icons.Component,
  server: Icons.Server,
  database: Icons.Database,
  terminal: Icons.Terminal,
  coffee: Icons.Coffee,
  'pen-tool': Icons.PenTool,
  image: Icons.Image,
  film: Icons.Film,
  layout: Icons.Layout,
  'git-branch': Icons.GitBranch,
  package: Icons.Package,
  smartphone: Icons.Smartphone,
};

export const SkillsGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Un ensemble de technologies et d'outils maîtrisés pour créer des expériences digitales exceptionnelles
          </p>
        </motion.div>

        {/* Grille de catégories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.skills.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Titre de catégorie */}
              <h3 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                {category.category}
              </h3>

              {/* Liste des compétences */}
              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon] || Icons.Code;
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="group"
                    >
                      {/* Nom et icône */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="text-cyan-400"
                          >
                            <IconComponent size={20} />
                          </motion.div>
                          <span className="text-slate-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Barre de progression */}
                      <div className="relative h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                          style={{
                            boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge de certification fictif (design) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-full">
            <p className="text-sm text-slate-300">
              🚀 En apprentissage continu · Technologies modernes · Design innovant
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};