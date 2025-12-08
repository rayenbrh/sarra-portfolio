import { useEffect, useState } from 'react';

interface Star {
  id: number;
  startX: number;
  startY: number;
  duration: number;
}

export const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const newStar: Star = {
        id: Date.now() + Math.random(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        duration: 1.5,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) => prev.filter((s) => s.id !== newStar.id));
      }, newStar.duration * 1000 + 100);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        createStar();
      }
    }, 8000);

    setTimeout(createStar, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: '2px',
            height: '2px',
            background: 'white',
            borderRadius: '50%',
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.8)',
            animation: `shooting ${star.duration}s linear forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes shooting {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(-300px, 300px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};