import React from 'react';

const STAR_COUNT = 15;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const stars = Array.from({ length: STAR_COUNT }).map((_, idx) => {
  const size = randomBetween(6, 16);
  const left = randomBetween(0, 100);
  const top = randomBetween(0, 100);
  const duration = randomBetween(1.2, 2.5);
  const delay = randomBetween(0, 2);
  return (
    <div
      key={idx}
      style={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #fff 0%, #fff8 60%, #fff0 100%)',
        boxShadow: '0 0 16px 4px #fff, 0 0 32px 8px #fff8',
        opacity: 0.7,
        animation: `star-blink ${duration}s infinite alternate`,
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
      }}
      className="star-bg-star"
    />
  );
});

const StarBackground = () => (
  <div
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}
    aria-hidden="true"
  >
    {stars}
    <style>{`
      @keyframes star-blink {
        0% { opacity: 0.7; transform: scale(1) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.2) rotate(10deg); }
        100% { opacity: 0.5; transform: scale(0.8) rotate(-10deg); }
      }
    `}</style>
  </div>
);

export default StarBackground; 