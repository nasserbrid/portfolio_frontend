import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projets from './pages/Projets';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
        <Services />
        <Projets />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;