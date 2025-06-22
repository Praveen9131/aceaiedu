import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ navigate }) => {
  return (
    <nav>
      <div className="logo">AceAI</div>
      <ul className="nav-links">
        <li><Link to="/#programs" className="dropdown">Programs</Link></li>
        <li><Link to="/#internships">Internships</Link></li>
        <li><Link to="/#workshops">Workshops</Link></li>
      </ul>
      <div className="nav-buttons">
        <Link to="/auth?type=login" className="btn-login">LOG IN</Link>
        <Link to="/auth?type=register" className="btn-register">REGISTER</Link>
        <Link to="/auth?type=register" className="btn-primary">GET STARTED</Link>
      </div>
    </nav>
  );
};

export default Navigation;