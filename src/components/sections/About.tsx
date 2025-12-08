import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Heart, Sparkles, Target, Users } from 'lucide-react';

export const About = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Passionnée par le design et le développement, je crée avec cœur et créativité.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles technologies et tendances design.',
    },
    {
      icon: Target,
      title: 'Précision',
      description: 'Sérieuse et organisée, je vise l\'excellence dans chaque détail.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Membre active de clubs tech, j\'aime partager et apprendre en équipe.',
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
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
              À Propos
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Développeuse et designer, je fusionne code et créativité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Portrait stylisé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Cercles décoratifs animés */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-3xl"
              />
              
              {/* Avatar image */}
              <div className="relative z-10 w-full h-full rounded-3xl border-2 border-slate-700 overflow-hidden">
                <img
                  src="/images/sarra.png"
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>


              {/* Badges flottants */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-cyan-500 text-white rounded-full font-semibold text-sm shadow-lg"
              >
                💻 Dev
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-purple-500 text-white rounded-full font-semibold text-sm shadow-lg"
              >
                🎨 Designer
              </motion.div>
            </div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed">
                Bonjour ! Je suis <span className="text-cyan-400 font-semibold">Sarra Hamila</span>, 
                étudiante en 3ᵉ année de Licence Multimédia à l'<span className="text-purple-400 font-semibold">ISITCom Sousse</span>.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                Mon parcours unique me permet de maîtriser à la fois le <strong>développement web</strong> 
                (HTML, CSS, JavaScript, React, PHP, SQL) et le <strong>design graphique</strong> 
                (Illustrator, Photoshop, Premiere Pro). Cette double compétence me permet de créer 
                des expériences digitales à la fois belles et fonctionnelles.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Membre active du <strong>Google Club</strong> et de <strong>Securinets</strong> 
                (club de cybersécurité), je suis constamment en veille technologique et j'adore 
                collaborer sur des projets innovants.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Mon objectif ? Créer des solutions digitales qui allient <strong>esthétique</strong>, 
                <strong>performance</strong> et <strong>expérience utilisateur</strong> exceptionnelle.
              </p>
            </div>

            {/* Langues */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                🇹🇳 Arabe (maternel)
              </div>
              <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                🇫🇷 Français (courant)
              </div>
              <div className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300">
                🇬🇧 Anglais (intermédiaire)
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valeurs / Qualités */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl mb-4"
              >
                <value.icon className="text-cyan-400" size={32} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-2">
                {value.title}
              </h3>
              
              <p className="text-sm text-slate-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};