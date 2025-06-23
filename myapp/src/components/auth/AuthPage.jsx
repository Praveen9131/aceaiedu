import React, { useState } from 'react';

const AuthSystem = () => {
  const [currentView, setCurrentView] = useState('login');
  const [userType, setUserType] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [instituteData, setInstituteData] = useState({
    institute_name: '',
    email: '',
    admin_name: '',
    password: '',
    address: '',
    login_type: 1,
    mobile_number: ''
  });

  const [individualStudentData, setIndividualStudentData] = useState({
    login_type: 2,
    student_name: '',
    email: '',
    password: '',
    status: 1,
    mobile_number: ''
  });

  const [instituteStudentData, setInstituteStudentData] = useState({
    institute_code: '',
    login_type: 2,
    student_name: '',
    email: '',
    password: '',
    status: 1,
    mobile_number: '',
    register_number: '',
    academic_year: ''
  });

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setShowForm(true);
  };

  const handleBackToSelection = () => {
    setShowForm(false);
    setUserType('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Login attempt:', loginData);
      alert('Login functionality would be implemented here');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInstituteSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Note: This would normally connect to your backend API
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Institute signup:', instituteData);
      alert('Institute registered successfully!');
    } catch (error) {
      console.error('Institute signup error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleIndividualStudentSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Note: This would normally connect to your backend API
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Individual student signup:', individualStudentData);
      alert('Student registered successfully!');
    } catch (error) {
      console.error('Individual student signup error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleInstituteStudentSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Note: This would normally connect to your backend API
      // For demo purposes, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Institute student signup:', instituteStudentData);
      alert('Institute student registered successfully!');
    } catch (error) {
      console.error('Institute student signup error:', error);
      alert('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const InputField = ({ icon, label, type = 'text', value, onChange, placeholder, required = true }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
          {icon}
        </span>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
        />
      </div>
    </div>
  );

  const PasswordField = ({ label, value, onChange, placeholder }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
          🔒
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
        >
          {showPassword ? '🙈' : '👁️'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📚</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">EduPlatform</h1>
            <p className="text-gray-600">
              {currentView === 'login' ? 'Welcome back!' : 'Create your account'}
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => {
                setCurrentView('login');
                setShowForm(false);
                setUserType('');
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                currentView === 'login'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setCurrentView('register');
                setShowForm(false);
                setUserType('');
              }}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                currentView === 'register'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {currentView === 'login' && (
            <div className="space-y-4">
              <InputField
                icon="📧"
                label="Email Address"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                placeholder="Enter your email"
              />
              
              <PasswordField
                label="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="Enter your password"
              />

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </button>
              </div>

              <button
                type="button"
                disabled={loading}
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </div>
          )}

          {/* Registration */}
          {currentView === 'register' && (
            <>
              {/* User Type Selection */}
              {!showForm && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">Choose Registration Type</h3>
                  <div className="space-y-3">
                    <button
                      type="button"
                      onClick={() => handleUserTypeSelection('institute')}
                      className="w-full p-4 border border-gray-300 rounded-lg text-left transition-all hover:border-blue-500 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🏢</span>
                        <div>
                          <div className="font-medium text-gray-900">Institute/Organization</div>
                          <div className="text-sm text-gray-600">Register your educational institution</div>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleUserTypeSelection('individual')}
                      className="w-full p-4 border border-gray-300 rounded-lg text-left transition-all hover:border-blue-500 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👤</span>
                        <div>
                          <div className="font-medium text-gray-900">Individual Student</div>
                          <div className="text-sm text-gray-600">Register as an independent learner</div>
                        </div>
                      </div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => handleUserTypeSelection('instituteStudent')}
                      className="w-full p-4 border border-gray-300 rounded-lg text-left transition-all hover:border-blue-500 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🎓</span>
                        <div>
                          <div className="font-medium text-gray-900">Institute Student</div>
                          <div className="text-sm text-gray-600">Join through your institution</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Registration Forms */}
              {showForm && (
                <div className="space-y-4">
                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={handleBackToSelection}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>←</span>
                    <span>Back to selection</span>
                  </button>

                  {/* Institute Registration Form */}
                  {userType === 'institute' && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Institute Registration</h3>
                      </div>
                      
                      <InputField
                        icon="🏢"
                        label="Institute Name"
                        value={instituteData.institute_name}
                        onChange={(e) => setInstituteData({...instituteData, institute_name: e.target.value})}
                        placeholder="Enter institute name"
                      />
                      
                      <InputField
                        icon="👤"
                        label="Admin Name"
                        value={instituteData.admin_name}
                        onChange={(e) => setInstituteData({...instituteData, admin_name: e.target.value})}
                        placeholder="Enter admin name"
                      />
                      
                      <InputField
                        icon="📧"
                        label="Email Address"
                        type="email"
                        value={instituteData.email}
                        onChange={(e) => setInstituteData({...instituteData, email: e.target.value})}
                        placeholder="Enter email address"
                      />
                      
                      <InputField
                        icon="📱"
                        label="Mobile Number"
                        type="tel"
                        value={instituteData.mobile_number}
                        onChange={(e) => setInstituteData({...instituteData, mobile_number: e.target.value})}
                        placeholder="Enter mobile number"
                      />
                      
                      <InputField
                        icon="📍"
                        label="Address"
                        value={instituteData.address}
                        onChange={(e) => setInstituteData({...instituteData, address: e.target.value})}
                        placeholder="Enter complete address"
                      />
                      
                      <PasswordField
                        label="Password"
                        value={instituteData.password}
                        onChange={(e) => setInstituteData({...instituteData, password: e.target.value})}
                        placeholder="Create a strong password"
                      />

                      <button
                        type="button"
                        disabled={loading}
                        onClick={handleInstituteSignup}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Registering...' : 'Register Institute'}
                      </button>
                    </div>
                  )}

                  {/* Individual Student Registration Form */}
                  {userType === 'individual' && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Individual Student Registration</h3>
                      </div>
                      
                      <InputField
                        icon="👤"
                        label="Student Name"
                        value={individualStudentData.student_name}
                        onChange={(e) => setIndividualStudentData({...individualStudentData, student_name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                      
                      <InputField
                        icon="📧"
                        label="Email Address"
                        type="email"
                        value={individualStudentData.email}
                        onChange={(e) => setIndividualStudentData({...individualStudentData, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                      
                      <InputField
                        icon="📱"
                        label="Mobile Number"
                        type="tel"
                        value={individualStudentData.mobile_number}
                        onChange={(e) => setIndividualStudentData({...individualStudentData, mobile_number: e.target.value})}
                        placeholder="Enter mobile number"
                      />
                      
                      <PasswordField
                        label="Password"
                        value={individualStudentData.password}
                        onChange={(e) => setIndividualStudentData({...individualStudentData, password: e.target.value})}
                        placeholder="Create a strong password"
                      />

                      <button
                        type="button"
                        disabled={loading}
                        onClick={handleIndividualStudentSignup}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Registering...' : 'Register as Student'}
                      </button>
                    </div>
                  )}

                  {/* Institute Student Registration Form */}
                  {userType === 'instituteStudent' && (
                    <div className="space-y-4">
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Institute Student Registration</h3>
                      </div>
                      
                      <InputField
                        icon="#️⃣"
                        label="Institute Code"
                        value={instituteStudentData.institute_code}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, institute_code: e.target.value})}
                        placeholder="Enter institute code"
                      />
                      
                      <InputField
                        icon="👤"
                        label="Student Name"
                        value={instituteStudentData.student_name}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, student_name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                      
                      <InputField
                        icon="#️⃣"
                        label="Registration Number"
                        value={instituteStudentData.register_number}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, register_number: e.target.value})}
                        placeholder="Enter registration number"
                      />
                      
                      <InputField
                        icon="📅"
                        label="Academic Year"
                        value={instituteStudentData.academic_year}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, academic_year: e.target.value})}
                        placeholder="e.g., 2024-2025"
                      />
                      
                      <InputField
                        icon="📧"
                        label="Email Address"
                        type="email"
                        value={instituteStudentData.email}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                      
                      <InputField
                        icon="📱"
                        label="Mobile Number"
                        type="tel"
                        value={instituteStudentData.mobile_number}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, mobile_number: e.target.value})}
                        placeholder="Enter mobile number"
                      />
                      
                      <PasswordField
                        label="Password"
                        value={instituteStudentData.password}
                        onChange={(e) => setInstituteStudentData({...instituteStudentData, password: e.target.value})}
                        placeholder="Create a strong password"
                      />

                      <button
                        type="button"
                        disabled={loading}
                        onClick={handleInstituteStudentSignup}
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? 'Registering...' : 'Register with Institute'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-gray-600">
            {currentView === 'login' ? (
              <span>
                Don't have an account?{' '}
                <button
                  onClick={() => setCurrentView('register')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign up
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button
                  onClick={() => setCurrentView('login')}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Sign in
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSystem;