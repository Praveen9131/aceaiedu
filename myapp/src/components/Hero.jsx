import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="hero-shapes">
        <div className="shape-3d"></div>
        <div className="shape-3d"></div>
        <div className="shape-3d"></div>
        <div className="shape-3d"></div>
      </div>
      <div className="hero-content">
        <h1>Learn AI with AceAI</h1>
        <p>Master cutting-edge AI technologies through our comprehensive training programs and hands-on internships. Start your journey to academic and professional excellence today.</p>
        <Link to="/#programs" className="hero-cta">EXPLORE PROGRAMS</Link>
      </div>
    </motion.section>
  );
};

export default Hero;