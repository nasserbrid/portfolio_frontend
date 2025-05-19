import axios from "axios";
import { useEffect, useState } from "react";

function Projets() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}Project/`)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des projets :", error);
        setError("Erreur lors du chargement des projets. Veuillez réessayer.");
        setLoading(false);
      });
  }, []);

  return (
    <section id="projets" className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          <span className="text-green-600">Mes</span> Réalisations
        </h2>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">
            Chargement des projets...
          </p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full"
              >
                {/* Contenu texte à gauche */}
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    <span className="text-green-600">
                      {project.title.split(" ")[0]}
                    </span>{" "}
                    {project.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>

                  {/* Compétences mobilisées */}
                  <h4 className="text-xl font-semibold text-black">
                    Compétences mobilisées :
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    {Array.isArray(project.skills)
                      ? project.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))
                      : project.skills
                          .split(",")
                          .map((skill, i) => <li key={i}>{skill.trim()}</li>)}
                  </ul>
                </div>

                {/* Image à droite */}
                <div className="flex-shrink-0 h-32 md:h-48 relative w-full md:w-1/2">
                  <img
                    // src={project.image_url}
                    src={project.ImageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projets;

// import React from 'react';

// function Projets() {
//   const projects = [
//     {
//       title: "E-commerce Premium",
//       description: "Site e-commerce développé avec React et Node.js",
//       image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
//     },
//     {
//       title: "Application SaaS",
//       description: "Dashboard analytics pour entreprises",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=815&q=80"
//     },
//     {
//       title: "Site Vitrine",
//       description: "Site moderne pour un restaurant gastronomique",
//       image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
//     }
//   ];

//   return (
//     <section id="projets" className="py-20 bg-gray-50 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Mes Réalisations</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div key={index} className="group relative overflow-hidden rounded-xl">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
//                 <p className="text-gray-200">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projets;
