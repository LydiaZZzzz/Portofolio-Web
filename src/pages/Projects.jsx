import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  { id: 1, title: 'Healing Book', desc: 'Playful art book reimagines emotional support through storytelling.' },
  { id: 2, title: 'The Choice Of Parrot', desc: "Narrative puzzle game exploring separation via parrot's perspective." },
  { id: 3, title: 'Silver Track', desc: 'Wearable LSTM system enables private, real-time elderly monitoring.' },
  { id: 4, title: 'Freelance Work Supervisor', desc: 'Dual-device tool supports freelancers with time and health balance.' },
];

const skills = [
  { name: 'Figma', icon: '/icons/Figma.png' },
  // ...
];

const iconCache = {};
skills.forEach((s) => {
  const img = new window.Image();
  img.src = s.icon;
  iconCache[s.icon] = img;
});

function Projects() {
  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            <div className="project-img-wrapper">
              <img
                src={`/project${p.id}.png`}
                alt={p.title + ' cover'}
                className="project-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1.2rem 0 0 1.2rem' }}
              />
            </div>
            <div className="project-info">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <Link to={`/projects/${p.id}`}>View Project →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 