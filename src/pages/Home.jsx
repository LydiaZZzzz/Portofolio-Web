import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import SkillsBubblesPhysics from '../components/SkillsBubblesPhysics';

const projects = [
  { id: 1, title: 'Healing Book', desc: 'Playful art book reimagines emotional support through storytelling.' },
  { id: 2, title: 'The Choice Of Parrot', desc: "Narrative puzzle game exploring separation via parrot's perspective." },
  { id: 3, title: 'Silver Track', desc: 'Wearable LSTM system enables private, real-time elderly monitoring.' },
  { id: 4, title: 'Freelance Work Supervisor', desc: 'Dual-device tool supports freelancers with time and health balance.' },
];

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-intro">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Hello there, I'm Yunqing Zhao.
          </motion.h1>
          <div className="hero-img-placeholder">
            <img src="/placeholder-hero.png" alt="Hero" style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 32px #0001' }} />
          </div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
            Human-Computer Interaction & Creative Technology
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.7 }}>
            Interdisciplinary designer passionate about user experience, creative technology, and tangible interaction.
          </motion.p>
        </div>
      </section>

      <section className="section projects-preview">
        <img src="/meme.gif" alt="Projects Animation" style={{ width: '90px', height: '90px', objectFit: 'contain', marginBottom: '0.7rem', display: 'block' }} />
        <h3>Selected Projects</h3>
        <div className="marquee-wrapper">
          <div className="marquee" tabIndex={0}>
            {[...projects, ...projects].map((p, i) => (
              <Link
                to={`/projects/${p.id}`}
                className="project-card"
                key={i}
                tabIndex={-1}
              >
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
                  <span className="view-link">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link to="/projects" className="more-link">See all projects</Link>
      </section>

      <section className="section services">
        <h3>Skills</h3>
        <SkillsBubblesPhysics />
      </section>
    </div>
  );
}

export default Home; 