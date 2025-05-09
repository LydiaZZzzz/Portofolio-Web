import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} Yunqing Zhao Portfolio. All rights reserved.</div>
    </footer>
  );
}

export default Footer; 