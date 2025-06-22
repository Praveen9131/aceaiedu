import React from 'react';

const InstituteRegistrationForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="instituteName" className="block text-white font-semibold mb-2">
          Institute Name
        </label>
        <input
          type="text"
          id="instituteName"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter institute name"
        />
      </div>
      <div>
        <label htmlFor="adminName" className="block text-white font-semibold mb-2">
          Admin Name
        </label>
        <input
          type="text"
          id="adminName"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter admin name"
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
          placeholder="Enter institute email"
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
      <div>
        <label htmlFor="location" className="block text-white font-semibold mb-2">
          Location
        </label>
        <input
          type="text"
          id="location"
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          placeholder="Enter institute location"
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

export default InstituteRegistrationForm;