import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Admin Header */}
        <div className="flex items-center space-x-6 mb-8">
          <img
            src="https://via.placeholder.com/80" // Replace with Admin Image
            alt="Admin Avatar"
            className="w-20 h-20 rounded-full border-4 border-purple-600"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">Admin Name</h1>
            <p className="text-gray-600">Administrator</p>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-2xl">5,348</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Content Published</h3>
            <p className="text-2xl">1,256</p>
          </div>
          <div className="bg-purple-600 text-white p-6 rounded-xl">
            <h3 className="text-xl font-semibold">System Health</h3>
            <p className="text-2xl">99.8% Uptime</p>
          </div>
        </div>

        {/* Manage Users Button */}
        <div className="text-center mb-6">
          <button
            onClick={() => setVisible(!visible)}
            className="py-2 px-6 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700"
          >
            {visible ? "Hide Users" : "Manage Users"}
          </button>
        </div>
      </div>

      {/* Toggle Visibility of User Management Section */}
      {visible && (
        <div className=" text-black p-6 rounded-xl shadow-xl mt-8">
          <h2 className="text-2xl font-semibold mb-4">User Details</h2>
          <div className="space-y-4">
            {/* Example User Details */}
            <div className="flex px-3">
              <span className="font-semibold">User Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex px-3">
              <span className="font-semibold">Email:</span>
              <span>johndoe@example.com</span>
            </div>
            <div className="flex px-3">
              <span className="font-semibold">Role:</span>
              <span>Admin</span>
            </div>
            <div className="flex px-3">
              <span className="font-semibold">Joined:</span>
              <span>2022-01-15</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
