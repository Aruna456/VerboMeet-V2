import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('/api/current_user', { 
          withCredentials: true 
        });
        console.log('Fetched user data:', response.data);
        setUser(response.data); 
      } catch (error) {
        console.error('Error fetching user:', error.response ? error.response.data : error.message);
        // setError(error.response ? error.response.data : error.message);
      }
    };

    fetchCurrentUser();
  }, []);

  // const isAdmin = user?.role === "admin";

  return (
    <nav className="landingbg text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-white">VerboMeet</h1>

          <div className="flex items-center space-x-6">
            <Link 
              className="text-white hover:text-purple-300 transition-colors duration-300" 
              to='/home'
            >
              Home
            </Link>
            <a
              href="#help"
              className="text-white hover:text-purple-300 transition-colors duration-300"
            >
              Ask Help
            </a>

            {/* Profile Photo */}
            <Link to={"/profile"}>
              {user ? (
                <img
                  src={user.avatar || "https://via.placeholder.com/40"}
                  alt="User Profile"
                  className="w-8 h-8 rounded-full border-2 border-white hover:border-purple-300 transition duration-300"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Profile"
                  className="w-8 h-8 rounded-full border-2 border-white hover:border-purple-300 transition duration-300"
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;