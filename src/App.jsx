import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsStories from './components/NewsStories';
import TrendingNews from './components/TrendingNews';
import Blog from './components/Blog';
import Viral from './components/Viral';

const App = () => {
  return (
    <div>
      <div className='bg-[#0e0e0e] min-h-screen text-white' >
        <Navbar />
        <Hero />
      </div>
      <NewsStories />
      <TrendingNews />
      <Blog/>
      <Viral/>
    </div>
  );
}

export default App;
