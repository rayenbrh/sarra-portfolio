sarra-portfolio/
├── public/                    # Assets statiques
│   ├── icons/                # Icônes PWA
│   └── images/               # Images de projets
├── src/
│   ├── components/
│   │   ├── 3D/               # Composants Three.js
│   │   │   ├── StarfieldCanvas.tsx
│   │   │   └── ShootingStars.tsx
│   │   ├── UI/               # Composants UI
│   │   │   └── Navigation.tsx
│   │   └── sections/         # Sections du site
│   │       ├── Hero3D.tsx
│   │       ├── SkillsGrid.tsx
│   │       ├── ProjectsCarousel.tsx
│   │       ├── Timeline.tsx
│   │       ├── About.tsx
│   │       ├── Contact.tsx
│   │       └── Footer.tsx
│   ├── data/                 # Données JSON
│   │   ├── skills.json
│   │   ├── projects.json
│   │   └── timeline.json
│   ├── hooks/                # Custom hooks
│   │   ├── useScroll.ts
│   │   └── useInView.ts
│   ├── store/                # Zustand store
│   │   └── appStore.ts
│   ├── styles/               # Styles CSS
│   │   └── index.css
│   ├── types/                # Types TypeScript
│   │   └── index.ts
│   ├── App.tsx               # Composant principal
│   └── main.tsx              # Point d'entrée
├── index.html                # HTML principal
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md