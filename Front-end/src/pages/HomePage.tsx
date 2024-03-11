import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import Presentation from "../components/Intro";
import ProductsList from "../components/ProductsList";
import axios from "axios";
import Card from "../components/Card";

const HomePage: React.FC = () => {
  // Fetch all products info :
  const [data, setData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetch request running");
      try {
        const response = await axios.get("http://localhost:3000");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data && data.length > 0 && (
        <>
          <Sidebar ProductData={data} />
          <Presentation />
          <ProductsList ProductData={data} />
          <Card productInfo={data[0]}/>
        </>
      )}
    </>
  );
};

export default HomePage;

// const HomePage: React.FC = () => {
//   return (
//     <div className="container mx-auto mt-8">
//       {/* Titre de l'entreprise */}
//       <h2 className="text-3xl font-bold text-center mb-8">
//         Anciens meubles pour une nouvelle vie
//       </h2>

//       {/* Liste des produits */}
//       <div className="grid grid-cols-2 gap-8">
//         {/* Premier produit */}
//         <div className="flex flex-col items-center p-4 bg-yellow-500 rounded">
//           {/* Image du produit */}
//           <img
//           //@ todoo : modifier l'adresse src par la photo du produits
//             src="https://prod-files-secure.s3.us-west-2.amazonaws.com/d4c32fe8-5cba-404e-8149-5663ebb62991/3dca3964-bbcb-4cc5-a22d-3562572d5931/1.jpg"
//             alt="Chaise Rustique"
//             className="mb-2 w-32 h-32 object-cover rounded"
//           />
//           {/* Nom du produit cliquable */}
//           <a
//             href="/produit/chaise-rustique"
//             className="text-lg font-bold hover:underline text-white"
//           >
//             Chaise Rustique
//           </a>
//           {/* Type de produit */}
//           <p className="text-white mb-1">Chaise</p>
//           {/* Prix du produit */}
//           <p className="text-white font-bold mb-2">45€</p>
//           {/* Bouton d'achat */}
//           <button className="bg-amber-200 text-white px-4 py-2 rounded hover:bg-amber-500">
//             Acheter
//           </button>
//         </div>

//         {/* Deuxième produit */}
//         {/* Répétez la structure pour chaque produit */}
//       </div>
//     </div>
//   );
// };
