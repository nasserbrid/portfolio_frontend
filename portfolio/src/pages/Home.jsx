import React from "react";
import profilePic from "../assets/profil_pic.png"; // Vérifie que le chemin est correct

function Home() {
  return (
    <section
      id="accueil"
      className="pt-28 md:pt-40 pb-20 px-4 bg-gradient-to-br from-green-50 to-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        {/* Image de profil centrée */}
        <div className="mb-6 md:mb-0 md:mr-8 flex justify-center">
          <img
            src={profilePic}
            alt="Photo de profil"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-green-600 shadow-lg"
          />
        </div>

        {/* Texte centré */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Nasser MOHAMED SAID
          </h1>
          <h2 className="text-lg md:text-xl text-green-600 font-semibold mb-4">
            Concepteur Développeur
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl">
            Je transforme vos idées en applications web modernes et performantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Discuter de votre projet
            </a>
            <a
              href="#projets"
              className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Voir mes réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
































// import React from 'react';

// function Home() {
//   return (
//     <section id="accueil" className="pt-28 md:pt-40 pb-20 px-4 bg-gradient-to-br from-green-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center">
//           <img src="assets/"/>
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//             Nasser MOHAMED SAID <span className="text-green-600">Concepteur Développeur</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Je transforme vos idées en applications web modernes et performantes
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="#contact"
//               className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
//             >
//               Discuter de votre projet
//             </a>
//             <a
//               href="#projets"
//               className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors"
//             >
//               Voir mes réalisations
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;