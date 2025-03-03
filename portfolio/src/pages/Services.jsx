import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';

function Services() {
  return (
    <section id="services" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Mes Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
            <Code className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Développement Web</h3>
            <p className="text-gray-600">Applications web sur mesure avec React, Node.js et les dernières technologies.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
            <Palette className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-600">Interfaces modernes et expériences utilisateur optimisées pour vos projets.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
            <Globe className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Solutions E-commerce</h3>
            <p className="text-gray-600">Boutiques en ligne performantes et sécurisées pour développer votre activité.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;