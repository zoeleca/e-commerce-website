import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import Intro from "../components/Intro";
import ProductsList from "../components/ProductsList";
import axios from "axios";
import { Product } from "../components/interface";

const HomePage: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setData(response.data);
        setFilteredData(response.data); // Initially set filtered data to all data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (filters: { color: string; material: string; category: string; subCategory: string }) => {
    // Filter products based on selected filters
    const filtered = data.filter(product => {
      return (
        (!filters.color || product.color_name === filters.color) &&
        (!filters.material || product.material_name === filters.material) &&
        (!filters.category || product.category_name === filters.category) &&
        (!filters.subCategory || product.sub_category_name === filters.subCategory)
      );
    });
    
      if(filtered.length > 0){ // Si lr résultat de la recherche filtre est > 0 Alors data = result du filtre
        setFilteredData(filtered)
      }else if (filtered.length > 0 && filteredData.length === 0){
        console.log("Aucun produit ne correspond à votre filtre")
        setFilteredData(null)
      } // Ou si la recherche du filtre est > 0 et que result du filtre = 0 Alors "Aucun produit ne correspond à votre filtre"
      else{setFilteredData(data)}; // Sinon affiché toute la data
    };

  return (
    <>
      <Sidebar onFilter={handleFilter} ProductData={filteredData}/>
      <Intro />
      <ProductsList ProductData={filteredData} />
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
