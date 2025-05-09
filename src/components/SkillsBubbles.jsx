import React from 'react';
import './SkillsBubbles.css';

const skills = [
  { name: 'Figma', icon: '/icons/figma.svg' },
  { name: 'Photoshop', icon: '/icons/ps.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
  { name: 'Skill', icon: '/icons/placeholder.svg' },
];

const SkillsBubbles = () => (
  <div className="skills-bubbles-container">
    {skills.map((s, i) => (
      <div className={`skill-bubble bubble-anim-${i % 5}`} key={i} title={s.name}>
        <img src={s.icon} alt={s.name} />
      </div>
    ))}
  </div>
);

export default SkillsBubbles; 