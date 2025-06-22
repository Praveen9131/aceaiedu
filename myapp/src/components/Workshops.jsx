import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const Workshops = () => {
  return (
    <motion.section
      className="workshops-section"
      id="workshops"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="background-shapes">
        <div className="background-box"></div>
        <div className="background-box"></div>
        <div className="background-box"></div>
        <div className="background-box"></div>
      </div>
      <div className="workshops-container">
        <div className="workshops-visual">
          <Tilt options={{ max: 15, scale: 1.02, speed: 300 }}>
            <div className="workshops-card-3d">
              <ul className="workshops-list">
                <li>🎓 Interactive AI workshops</li>
                <li>🖥️ Hands-on expert sessions</li>
                <li>📚 Latest AI trends</li>
                <li>🤝 Network with pros</li>
                <li>🚀 Build practical skills</li>
                <li>🌟 Cutting-edge tools</li>
                <li>📈 Boost your career</li>
              </ul>
            </div>
          </Tilt>
        </div>
        <div className="workshops-content">
          <div className="workshops-badge">WORKSHOPS</div>
          <h2>Explore AI Workshops</h2>
          <p>Dive into AceAI's interactive AI workshops led by industry experts. Gain hands-on experience, master the latest AI trends, and network with professionals. Access cutting-edge tools and build practical skills to accelerate your AI career.</p>
          <Link to="/#workshops-signup" className="workshops-cta">Start Learning</Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Workshops;