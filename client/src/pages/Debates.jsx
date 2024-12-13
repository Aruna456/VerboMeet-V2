import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Debates = () => {
  const debates = [
    {
      title: 'Artificial Intelligence in Society',
      desc: 'Explore the impact of AI on our daily lives and its ethical implications.',
      eventdetails: 'Date: Dec 15, 2024 | Time: 5:00 PM | Venue: Virtual',
      category: 'Technology',
    },
    {
      title: 'Climate Change: Myth or Reality?',
      desc: 'Dive into the debate on climate change and discuss its significance.',
      eventdetails: 'Date: Dec 20, 2024 | Time: 4:00 PM | Venue: Hall A',
      category: 'Environment',
    },
    {
      title: 'The Future of Education',
      desc: 'Discuss how technology is reshaping the education sector.',
      eventdetails: 'Date: Dec 25, 2024 | Time: 3:00 PM | Venue: Seminar Room',
      category: 'Education',
    },
    {
      title: 'Space Exploration: Is it Worth the Cost?',
      desc: 'A thought-provoking discussion on the benefits of space exploration.',
      eventdetails: 'Date: Dec 30, 2024 | Time: 6:00 PM | Venue: Auditorium',
      category: 'Science',
    },
  ];

  const categories = [
    'All',
    'Technology',
    'Environment',
    'Education',
    'Politics',
    'Science',
    'Health',
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDebates =
    selectedCategory === 'All'
      ? debates
      : debates.filter((debate) => debate.category === selectedCategory);

  return (
    <>
      <Navbar />

      <section className="w-full h-[50vh] landingbg flex items-center justify-center text-center text-white">
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore Exciting Debates
          </h1>
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
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-800 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition-transform">
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
    </>
  );
};

export default Debates;
