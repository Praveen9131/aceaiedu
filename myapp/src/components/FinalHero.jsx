import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalHero = () => {
  return (
    <motion.section
      className="final-hero"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="final-hero-content">
        <h2>Learn. Master. Excel.</h2>
        <p>Build and master AI skills with the fastest learning platform for academic excellence.</p>
        <div className="final-hero-buttons">
          <Link to="/#start" className="btn-primary">GET STARTED</Link>
          <Link to="/#contact" className="btn-secondary">CONTACT US</Link>
        </div>
      </div>
    </motion.section>
  );
};

export default FinalHero;