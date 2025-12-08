import { StarfieldCanvas } from './components/3D/StarfieldCanvas';
import { ShootingStars } from './components/3D/ShootingStars';
import { Navigation } from './components/UI/Navigation';
import { Hero3D } from './components/sections/Hero3D';
import { SkillsGrid } from './components/sections/SkillsGrid';
import { ProjectsCarousel } from './components/sections/ProjectsCarousel';
import { Timeline } from './components/sections/Timeline';
import { CVVideo } from './components/sections/CVVideo';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100vw', 
      minHeight: '100vh',
      background: '#020617',
      overflow: 'hidden'
    }}>
      {/* Fond d'étoiles - position absolute, derrière tout */}
      <div style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      }}>
        <StarfieldCanvas />
        <ShootingStars />
      </div>
      
      {/* Contenu du site - position relative pour être au-dessus */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1,
        pointerEvents: 'none' // Important !
      }}>
        <div style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1 }}> {/* Réactive les clics pour le contenu */}
          <Navigation />
          <main>
            <Hero3D />
            <SkillsGrid />
            <ProjectsCarousel />
            <Timeline />
            <CVVideo />
            <About />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;