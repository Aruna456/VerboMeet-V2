import { useState } from 'react';

const UserProfile = () => {
  const [isChangePasswordVisible, setIsChangePasswordVisible] = useState(false);
  const [isRegisteredEventsVisible, setIsRegisteredEventsVisible] = useState(false);

  // Mock data for registered events
  const registeredEvents = [
    {
      title: 'Artificial Intelligence in Society',
      date: 'Dec 15, 2024',
      time: '5:00 PM',
      venue: 'Virtual',
    },
    {
      title: 'Climate Change: Myth or Reality?',
      date: 'Dec 20, 2024',
      time: '4:00 PM',
      venue: 'Hall A',
    },
    {
      title: 'The Future of Education',
      date: 'Dec 25, 2024',
      time: '3:00 PM',
      venue: 'Seminar Room',
    },
  ];

  const toggleChangePasswordForm = () => {
    setIsChangePasswordVisible(!isChangePasswordVisible);
  };

  const toggleRegisteredEventsVisibility = () => {
    setIsRegisteredEventsVisible(!isRegisteredEventsVisible);
  };

  const handleProfilePictureChange = () => {
    // Handle profile picture change
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Handle password change logic
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">User Profile</h2>

        {/* Profile Picture */}
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-300 mr-4">
            {/* Display profile picture here */}
          </div>
          <button
            onClick={handleProfilePictureChange}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-lg"
          >
            Change Profile Picture
          </button>
        </div>

        {/* Change Password Button */}
        <button
          onClick={toggleChangePasswordForm}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-lg mb-6"
        >
          Change Password
        </button>

        {/* Change Password Form (Hidden/Visible on Button Click) */}
        {isChangePasswordVisible && (
          <section className="mt-4 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Change Password</h3>
            <form onSubmit={handlePasswordChange}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="old-password">
                  Old Password
                </label>
                <input
                  type="password"
                  id="old-password"
                  name="old-password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="new-password">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  name="new-password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-lg w-full"
              >
                Change Password
              </button>
            </form>
          </section>
        )}

        {/* View Registered Events Button */}
        <button
          onClick={toggleRegisteredEventsVisibility}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-lg ml-3 mb-6 mt-6"
        >
          {isRegisteredEventsVisible ? 'Hide Registered Events' : 'View Registered Events'}
        </button>

        {/* Registered Events Section */}
        {isRegisteredEventsVisible && (
          <section className="mt-4 bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Registered Events</h3>
            {registeredEvents.length === 0 ? (
              <p>No events registered yet.</p>
            ) : (
              <ul>
                {registeredEvents.map((event, idx) => (
                  <li key={idx} className="mb-4">
                    <p className="font-semibold">{event.title}</p>
                    <p>{event.date} | {event.time}</p>
                    <p>{event.venue}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
