import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserDetails = localStorage.getItem('user');
    console.log(storedUserDetails); // Check what's stored in localStorage

    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails)); // Parse and set user details
    } else {
      console.log('No user details found, redirecting to login');
      navigate('/signIn'); // Redirect to login if no user details found
    }
  }, [navigate]);

  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      {/* Profile Header Section */}
      <section className="w-full h-[30vh] bg-gradient-to-r from-blue-800 to-black text-white flex items-center justify-center text-center">
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Profile</h1>
        </div>
      </section>

      {/* Profile Details Section */}
      <section className="py-20 px-6 bg-white">
        {userDetails ? (
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl">
            {/* Profile Information */}
            <div className="flex items-center mb-12">
              <img
                src={userDetails.avatar}
                alt="Avatar"
                className="w-32 h-32 rounded-full border-4 border-blue-600"
              />
              <div className="ml-6">
                <h2 className="text-3xl font-semibold text-gray-800">{userDetails.displayName}</h2>
                <p className="text-lg text-gray-600">{userDetails.email}</p>
                <p className="text-sm text-gray-500">{userDetails.googleId}</p>
              </div>
            </div>

            {/* Registered Debates Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Registered Debates</h3>
              {userDetails.registeredDebates.length > 0 ? (
                <div className="space-y-6">
                  {userDetails.registeredDebates.map((debate) => (
                    <div
                      key={debate._id}
                      className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="text-xl font-semibold text-indigo-600">{debate.title}</h4>
                      <p className="text-gray-700 mt-2">{debate.desc}</p>
                      <p className="text-gray-600 mt-2">
                        <strong>Category:</strong> {debate.category}
                      </p>
                      <p className="text-gray-500 mt-2">
                        <strong>Event Details:</strong> {debate.eventDetails}
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        <strong>Registered On:</strong> {new Date(debate.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">You haven't registered for any debates yet.</p>
              )}
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">Loading profile...</p>
        )}
      </section>
    </div>
  );
};

export default UserProfile;
