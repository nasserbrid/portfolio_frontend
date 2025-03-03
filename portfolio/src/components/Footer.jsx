import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nasser MOHAMED SAID</h3>
            <p className="text-gray-400 max-w-md">
              Concepteur Développeur d'Application
            </p>
          </div>
          <div className="flex justify-start md:justify-end items-center space-x-6">
            <a
              href="https://github.com/nasserbrid"
              target="_blank"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nassermohamedsaid/"
              target="_blank"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nasser MOHAMED SAID. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
