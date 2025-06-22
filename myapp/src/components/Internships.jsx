import React from 'react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt'; // ✅ Correct

import { motion } from 'framer-motion';

const Internships = () => {
  const internships = [
    { title: 'AI Research Internship', description: 'Work on cutting-edge projects in Generative AI and Deep Learning. Collaborate with industry experts and gain hands-on experience in advancing AI technologies.', link: '#apply-research' },
    { title: 'Data Science Internship', description: 'Receive practical training in data analysis, machine learning, and AI model deployment. Ideal for students aiming to build a career in data science with real-world applications.', link: '#apply-datascience' },
    { title: 'AI Development Internship', description: 'Develop real-world AI applications by working on live projects. Learn from mentors and enhance your technical skills in building AI-driven solutions.', link: '#apply-development' },
    { title: 'Machine Learning Internship', description: 'Dive into machine learning algorithms and their applications. Work on projects that involve predictive modeling, natural language processing, and more.', link: '#apply-ml' },
    { title: 'AI Ethics Internship', description: 'Explore the ethical implications of AI development. Contribute to projects focused on responsible AI practices and policy development.', link: '#apply-ethics' },
    { title: 'AI in Healthcare Internship', description: "Apply AI to healthcare challenges, working on projects like medical imaging analysis and predictive diagnostics. Gain insights into AI's role in improving patient outcomes.", link: '#apply-healthcare' },
    { title: 'Python Development Internship', description: 'Specialize in Python programming for AI and data science applications. Build and deploy scalable AI models using Python frameworks like TensorFlow and PyTorch.', link: '#apply-python' },
    { title: 'DevOps Internship', description: 'Learn to streamline AI development pipelines with DevOps practices. Gain expertise in CI/CD, containerization with Docker, and automation for AI projects.', link: '#apply-devops' },
    { title: 'Cloud Computing Internship', description: 'Master cloud platforms like AWS, Azure, and GCP for AI deployments. Work on scalable cloud-based AI solutions and infrastructure management.', link: '#apply-cloud' },
    { title: 'Java Development Internship', description: 'Develop robust AI applications using Java. Work on enterprise-level projects and gain expertise in Java-based AI frameworks and tools.', link: '#apply-java' },
    { title: 'Frontend Development Internship', description: 'Create intuitive user interfaces for AI applications. Master modern frontend technologies like React and JavaScript to enhance user experiences.', link: '#apply-frontend' },
  ];

  return (
    <motion.section
      className="internships-section"
      id="internships"
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
      <h2>Explore Our Internships</h2>
      <div className="internships-content">
        {internships.map((internship, index) => (
          <Tilt key={index} options={{ max: 15, scale: 1.02, speed: 300 }}>
            <div className="internship-card">
              <h3>{internship.title}</h3>
              <p>{internship.description}</p>
              <Link to={internship.link}>Apply Now</Link>
            </div>
          </Tilt>
        ))}
      </div>
    </motion.section>
  );
};

export default Internships;