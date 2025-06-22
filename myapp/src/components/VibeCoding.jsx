import React from 'react';
import { motion } from 'framer-motion';

const VibeCoding = () => {
  return (
    <motion.section
      className="vibecoding-section-new"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Floating geometric shapes background */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>

      <div className="vibecoding-container-new">
        {/* Main heading */}
        <div className="vibecoding-header">
          <h2>Industry-Level AI.<br />Master Generative AI.</h2>
        </div>

        {/* Subtitle */}
        <div className="vibecoding-subtitle">
          <p>Empowering professionals with cutting-edge AI skills</p>
        </div>

        {/* Feature cards grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Hands-on AI projects</h3>
              <p>Build real-world applications</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Generative AI expertise</h3>
              <p>Master models like GANs and LLMs</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Collaborative learning</h3>
              <p>Work with industry experts</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Ethical AI practices</h3>
              <p>Ensure compliance and fairness</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="feature-content">
              <h3>Cloud-based AI tools</h3>
              <p>Deploy on AWS and GCP</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="vibecoding-cta-container">
          <a href="/#vibecoding-signup" className="vibecoding-cta-new">
            Start Learning AI
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default VibeCoding;