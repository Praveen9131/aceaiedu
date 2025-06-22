import React from 'react';

const StudentWithInstituteForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="firstName" className="block text-white font-semibold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <label htmlFor="lastName" className="block text-white font-semibold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <label htmlFor="regNumber" className="block text-white font-semibold mb-2">
          Registration Number
        </label>
        <input
          type="text"
          id="regNumber"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter your registration number"
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block text-white font-semibold mb-2">
          Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter your mobile number"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="academicYear" className="block text-white font-semibold mb-2">
          Academic Year
        </label>
        <input
          type="text"
          id="academicYear"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter your academic year"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-white font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Create a password"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-semibold rounded-lg hover:from-[#7C3AED] hover:to-[#9333EA] transition-all duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default StudentWithInstituteForm;