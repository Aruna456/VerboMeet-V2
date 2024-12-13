import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AdminPage = () => {
  
  
  return (
    <>
      <Navbar />

      <section
        id="Home"
        className="w-full h-[60vh] landingbg flex items-center justify-center text-center text-white"
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
           Welcome Admin!
          </h1>
          <p className="text-lg md:text-xl opacity-90">
          Lead the way, empower the voices, and shape meaningful debates!
          </p>
          <Link to='/admindebates'>
          <button className="mt-6 px-8 py-4 bg-white text-purple-700 rounded-lg font-semibold shadow-lg hover:scale-105 transition-transform">
            Manage Debates
          </button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How VerboMeet Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">1. Register</h3>
            <p className="text-gray-600">
              Sign up and create your account in just a few clicks.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">2. Register for Debates</h3>
            <p className="text-gray-600">
              Browse through debates and join the ones you’re interested in.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-semibold mb-4">3. Engage</h3>
            <p className="text-gray-600">
              Participate, share your thoughts, and learn from others.
            </p>
          </div>
        </div>
      </section>



      {/* Ask Help Section */}
      <section id="help" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Ask for Help
        </h2>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Describe your issue or request"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:outline-none"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    

    </>
  );
};

export default AdminPage;
