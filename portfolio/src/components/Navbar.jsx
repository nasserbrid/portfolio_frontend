import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gradient-to-r from-black to-green-900 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 font-bold text-xl text-white">
            Nasser MOHAMED SAID
            <span className="block text-sm text-green-400 font-normal">Concepteur Développeur d'Application</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-300 hover:text-green-400 transition-colors">Accueil</a>
            <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a>
            <a href="#projets" className="text-gray-300 hover:text-green-400 transition-colors">Projets</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            <a href="#accueil" className="block px-3 py-2 text-gray-300 hover:text-green-400">Accueil</a>
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-green-400">Services</a>
            <a href="#projets" className="block px-3 py-2 text-gray-300 hover:text-green-400">Projets</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-green-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;