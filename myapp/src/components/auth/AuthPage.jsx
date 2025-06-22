import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';

const AuthPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || 'selection';

  const [currentView, setCurrentView] = useState(initialType === 'login' ? 'login' : 'selection');
  const [registrationType, setRegistrationType] = useState('');

  useEffect(() => {
    setCurrentView(initialType === 'login' ? 'login' : 'selection');
  }, [initialType]);

  const registrationTypes = [
    { id: 'student', title: 'Student Registration', description: 'Register as an individual student', icon: '👤' },
    { id: 'institute', title: 'Institute Registration', description: 'Register your educational institution', icon: '🏢' },
    { id: 'studentWithInstitute', title: 'Student with Institute', description: 'Register as a student with institute details', icon: '🎓' },
  ];

  const handleRegistrationTypeSelect = (type) => {
    setRegistrationType(type);
    setCurrentView('register');
  };

  const StudentRegistrationForm = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', password: '' });
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => { e.preventDefault(); console.log('Student data:', formData); };

    return (
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group grid grid-cols-2 gap-4">
          <div>
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" placeholder="First Name" required />
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" placeholder="Last Name" required />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" required />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="Create Password" required />
        </div>
        <button type="submit" className="edutech-button">Register as Student</button>
      </form>
    );
  };

  const InstituteRegistrationForm = () => {
    const [formData, setFormData] = useState({ instituteName: '', adminName: '', email: '', password: '', location: '' });
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => { e.preventDefault(); console.log('Institute data:', formData); };

    return (
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label className="form-label">Institute Name</label>
          <input type="text" name="instituteName" value={formData.instituteName} onChange={handleChange} className="form-input" placeholder="Institute Name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Admin Name</label>
          <input type="text" name="adminName" value={formData.adminName} onChange={handleChange} className="form-input" placeholder="Admin Name" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Institute Email" required />
        </div>
        <div className="form-group">
          <label className="form-label">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-input" placeholder="Institute Location" required />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="Create Password" required />
        </div>
        <button type="submit" className="edutech-button">Register Institute</button>
      </form>
    );
  };

  const StudentWithInstituteForm = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', regNumber: '', mobile: '', email: '', academicYear: '', password: '' });
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => { e.preventDefault(); console.log('Student with Institute data:', formData); };

    return (
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group grid grid-cols-2 gap-4">
          <div>
            <label className="form-label">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" placeholder="First Name" required />
          </div>
          <div>
            <label className="form-label">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" placeholder="Last Name" required />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Registration Number</label>
          <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} className="form-input" placeholder="Registration Number" required />
        </div>
        <div className="form-group">
          <label className="form-label">Mobile</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="form-input" placeholder="Mobile Number" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Email Address" required />
        </div>
        <div className="form-group">
          <label className="form-label">Academic Year</label>
          <input type="text" name="academicYear" value={formData.academicYear} onChange={handleChange} className="form-input" placeholder="Academic Year (e.g., 2023-2024)" required />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" placeholder="Create Password" required />
        </div>
        <button type="submit" className="edutech-button">Register with Institute</button>
      </form>
    );
  };

  const renderRegistrationForm = () => {
    switch (registrationType) {
      case 'student': return <StudentRegistrationForm />;
      case 'institute': return <InstituteRegistrationForm />;
      case 'studentWithInstitute': return <StudentWithInstituteForm />;
      default: return null;
    }
  };

  return (
    <div className="edutech-page">
      <div className="background-animation">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <main className="edutech-main">
        <div className="course-container">
          {currentView === 'selection' && (
            <div className="text-center">
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Choose Your Path</h2>
                <p className="text-lg text-text-secondary">Select your registration type to begin</p>
              </div>
              <div className="course-container">
                {registrationTypes.map((type) => (
                  <div key={type.id} onClick={() => handleRegistrationTypeSelect(type.id)} className="course-card selection-card">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-3xl text-white">{type.icon}</span>
                    </div>
                    <h3 className="text-xl font-medium text-text-primary mb-2">{type.title}</h3>
                    <p className="text-text-secondary mb-4">{type.description}</p>
                    <button className="edutech-button">Select</button>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-text-secondary mb-2">Already have an account?</p>
                <button onClick={() => setCurrentView('login')} className="edutech-button">Sign In</button>
              </div>
            </div>
          )}
          {currentView === 'login' && (
            <div>
              <LoginForm onSwitchView={() => setCurrentView('selection')} />
              <div className="mt-6 text-center">
                <p className="text-text-secondary mb-2">Already have an account?</p>
                <button onClick={() => setCurrentView('selection')} className="edutech-button">Back to Selection</button>
              </div>
            </div>
          )}
          {currentView === 'register' && (
            <div className="auth-card">
              <div className="text-center mb-8">
                <button onClick={() => setCurrentView('selection')} className="text-accent-color hover:underline mb-4">← Back to selection</button>
                <h2 className="text-2xl font-semibold text-text-primary mb-2">
                  {registrationTypes.find(type => type.id === registrationType)?.title}
                </h2>
                <p className="text-text-secondary">Create your account</p>
              </div>
              {renderRegistrationForm()}
              <div className="mt-6 text-center">
                <p className="text-text-secondary mb-2">Already have an account?</p>
                <button onClick={() => setCurrentView('login')} className="edutech-button">Sign In</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AuthPage;