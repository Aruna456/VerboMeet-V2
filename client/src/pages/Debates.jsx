import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { ToastContainer, toast } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Debates = () => {
  const [debates, setDebates] = useState([]);
  const [userId, setUserId] = useState(null); // State to store the userId
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { debateId } = useParams(); // Get the debateId from the URL
  const navigate = useNavigate(); // For navigating programmatically

  // Fetch debates
  const fetchDebates = async () => {
    try {
      const response = await fetch('http://localhost:5000/debates');
      if (response.ok) {
        const data = await response.json();
        setDebates(data);
      } else {
        toast.error('Failed to fetch debates');
      }
    } catch (error) {
      toast.error('Network error while fetching debates');
      console.error(error);
    }
  };

  // Check if user details are in localStorage or fetch from the server
  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    
    if (userDetails) {
      // If userDetails exist in localStorage, parse and set userId
      const parsedUserDetails = JSON.parse(userDetails);
      setUserId(parsedUserDetails.id);
    } else {
      // If userDetails are not found, fetch from server
      const fetchCurrentUser = async () => {
        try {
          const response = await axios.get('/api/current_user', { 
            withCredentials: true 
          });
          setUserId(response.data.id); // Set userId from the response
        } catch (error) {
          console.error('Error fetching user:', error.response ? error.response.data : error.message);
        }
      };
      fetchCurrentUser();
    }
    
    fetchDebates(); // Fetch debates when the component mounts
  }, []);

  const handleRegister = async (debateId) => {
    // Check userId from localStorage before registration
    if (!userId) {
        toast.error('User  is not logged in');
        return;
    }

    if (!debateId) {
        toast.error('No debate selected');
        return;
    }

    try {
        // Send a POST request to register the user for the debate
        const response = await axios.post('http://localhost:5000/debates/register', {
            userId,
            debateId,
        });
        // Handle success response
        console.log('Registration successful:', response.data);
        toast.success('You have successfully registered for the debate!');
    } catch (error) {
        // Handle error response
        console.error('Error registering for debate:', error.response?.data || error.message);
        
        // Check for specific error message about already being registered
        if (error.response && error.response.data && error.response.data.error) {
            if (error.response.data.error === 'Already registered for this debate') {
                toast.error('You are already registered for this debate.');
            } else {
                toast.error('Error registering for the debate: ' + error.response.data.error);
            }
        } else {
            toast.error('Error registering for the debate. Please try again later.');
        }
    }
};

  const categories = [
    'All',
    'Technology',
    'Environment',
    'Education',
    'Politics',
    'Science',
    'Health',
  ];

  const filteredDebates =
    selectedCategory === 'All'
      ? debates
      : debates.filter((debate) => debate.category === selectedCategory);

  return (
    <>
      <Navbar />
      <section className="w-full h-[50vh] landingbg flex items-center justify-center text-center text-white">
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Exciting Debates</h1>
          <p className="text-lg md:text-xl opacity-90">
            Engage in thought-provoking topics and enhance your debating skills.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Explore by Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer landingbg text-white w-[200px] h-[120px] flex items-center justify-center text-lg font-semibold rounded-xl shadow-lg hover:bg-purple-700 transition-colors ${
                selectedCategory === category ? 'bg-purple-700' : ''
              }`}
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {selectedCategory === 'All'
            ? 'Featured Debates'
            : `${selectedCategory} Debates`}
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {filteredDebates.length > 0 ? (
            filteredDebates.map((data, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden w-[300px] hover:scale-105 transition-transform"
              >
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{data.title}</h3>
                  <p className="text-gray-600 mb-4">{data.desc}</p>
                  <p className="text-gray-600 mb-4">{data.eventdetails}</p>
                  <p className="text-sm text-purple-800 rounded-lg font-semibold mb-4">
                    {data.category}
                  </p>
                  <button
                    onClick={() => {
                      // Use data._id for debateId
                      handleRegister(data._id); // Pass data._id to register function
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-lg">
              No debates available for the selected category.
            </p>
          )}
        </div>
      </section>

      {/* ToastContainer to display toasts */}
      <ToastContainer />
    </>
  );
};

export default Debates;
