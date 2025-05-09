import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

const projects = [
  { id: 1, title: 'Healing Book', desc: 'PThis project uses a playful, art-based interactive book to make emotional support more engaging and approachable, addressing the dullness and disconnection of many existing mental health tools.' },
  { id: 2, title: 'The Choice Of  Parrot', desc: 'Modern UI kit for mobile applications.', content: 'This is a detailed description of the App UI Kit project. You can add more info, images, and links here.' },
  { id: 3, title: 'Landing Page', desc: 'High-conversion landing page for SaaS.', content: 'This is a detailed description of the Landing Page project. You can add more info, images, and links here.' },
  { id: 4, title: 'Dashboard Redesign', desc: 'Analytics dashboard for enterprise clients.', content: 'A complete redesign of an enterprise analytics dashboard, focusing on usability, data visualization, and modern UI patterns. Includes custom charts, responsive layouts, and dark mode support.' },
];

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id);

  if (!project) {
    return <div style={{ padding: '2rem' }}>Project not found.</div>;
  }

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      <div className="project-images">
        {Array.from({ length: project.id <= 2 ? 9 : 7 }).map((_, i) => (
          <div className="project-image-wrapper" key={i}>
            <div className="project-image-16x9">
              <img
                src={i === 0 ? `/project${project.id}.png` : `/detail${project.id}-${i + 1}.png`}
                alt={i === 0 ? `cover` : `detail${i + 1}`}
                className="project-image"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;