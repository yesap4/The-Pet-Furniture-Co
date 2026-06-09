import React from 'react';
import Menu from './Components/Menu/Menu';
import HeroSection from './Components/Hero Section/HeroSection';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div className="bg-green-100" >
      <Menu />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default App;