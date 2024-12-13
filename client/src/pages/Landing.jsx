// import React from 'react';
import aboutimg from '../assets/img/about.jpeg';
import contactimg from '../assets/img/contact.jpg';
import {Facebook,Twitter,Instagram,Linkedin} from 'lucide-react'
// import {Link} from 'react-router-dom'

const Landing = () => {
  const handleGoogleSignIn = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };

  return (
    <>
      {/* Landing Section */}
      <div className="landingbg w-full h-[70vh] flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight animate__animated animate__fadeIn animate__delay-1s">
          Welcome to VerboMeet!
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          An online platform to register and participate in thought-provoking debates. Sharpen your mind and connect with people who challenge your thinking.
        </p>

        <button
        onClick={handleGoogleSignIn}
        className="px-8 py-4 bg-red-500 text-white rounded-lg font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        Sign in with Google
      </button>
      </div>

      {/* About Section */}
      <div id="about" className="w-screen flex flex-col md:flex-row py-20 px-6 md:px-20 bg-gray-50">
        {/* Left Column: About Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 justify-start">
          <h3 className="font-extrabold text-3xl md:text-4xl text-blue-900 mb-6 animate__animated animate__fadeIn animate__delay-1s">
            About 
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2s">
            VerboMeet is a premium online platform designed to empower individuals to participate in thought-provoking debates. 
            Whether you&apos;re a seasoned debater or just starting, VerboMeet provides an easy and accessible way to register for 
            upcoming debates and engage in intellectual discussions.
          </p>
          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed animate__animated animate__fadeIn animate__delay-3s">
            Our platform fosters critical thinking, encourages diverse perspectives, and connects individuals from different 
            backgrounds to engage in respectful, meaningful debates. Join our growing community and be part of conversations 
            that challenge your ideas and broaden your worldview.
          </p>
        </div>

        {/* Right Column: Image Section */}
        <div  id="contact" className="w-full md:w-1/2 flex justify-center items-center py-10">
          <div className="w-full h-80 md:h-96 relative group">
            <img 
              src={aboutimg} 
              alt="Debate" 
              className="w-full h-full object-cover rounded-xl shadow-lg group-hover:opacity-80 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl group-hover:bg-opacity-0 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Join the Debate Now
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-screen flex flex-col md:flex-row py-20 px-6 md:px-20">
        <div className="w-full md:w-1/2 flex justify-center items-center py-10">
          <div className="w-full h-80 md:h-96 relative group">
            <img 
              src={contactimg} 
              alt="Contact" 
              className="w-full h-full object-cover rounded-xl shadow-lg group-hover:opacity-80 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-black/15 bg-opacity-30 rounded-xl group-hover:bg-opacity-0 transition-all duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              Get in Touch
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-8 px-[10%]">
          <h3 className="font-extrabold text-2xl md:text-3xl text-blue-800 mb-6">
            Get In Touch
          </h3>
          <form className="w-full max-w-md flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg rounded-md"
                placeholder="Your email"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                className="peer w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 text-lg rounded-md"
                rows="1"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-700 to-blue-700 text-white rounded-lg font-semibold shadow-md mt-6 transform transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="landingbg h-[20vh] bg-gray-900 text-white flex flex-col justify-center items-center py-10">
      <div className="flex gap-5 space-x-6 mb-4">
        <a href="#" className="text-white hover:text-purple-500 transition-all duration-300">
          <Facebook className="text-2xl" />
        </a>
        <a href="#" className="text-white hover:text-purple-500 transition-all duration-300">
          <Twitter className="text-2xl" />
        </a>
        <a href="#" className="text-white hover:text-purple-500 transition-all duration-300">
          <Instagram className="text-2xl" />
        </a>
        <a href="#" className="text-white hover:text-purple-500 transition-all duration-300">
          <Linkedin className="text-2xl" />
        </a>
      </div>
      <div className="text-sm">
        <p>&copy; 2024 VerboMeet. All Rights Reserved.</p>
      </div>
    </div>

    </>
  );
};

export default Landing;
