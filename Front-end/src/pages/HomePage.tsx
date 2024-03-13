import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import Intro from "../components/Intro";
import ProductsList from "../components/ProductsList";
import axios from "axios";

import { Product } from "../components/interface";
import ProductDetail from "../components/ProductDetail";


const HomePage: React.FC = () => {
//déclaration de toutes les constantes
  const [data, setData] = useState<Product[]>([]);
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  //useEffect pour récuperer de la donnée d'une Api extérieur
  useEffect(() => {
    // va 'fetch' la data
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000");
        setData(response.data);
        //console.log(data)
        setFilteredData(response.data); // Initialisation des données filtrées avec l'ensemble des données.
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Fonction qui récupère les filtres choisit par l'utilisateur
  const handleFilter = (filters: { color: string; material: string; category: string; subCategory: string }) => {
    const filtered = data.filter(product => {
      return (
        (!filters.color || product.color_name === filters.color) &&
        (!filters.material || product.material_name === filters.material) &&
        (!filters.category || product.category_name === filters.category) &&
        (!filters.subCategory || product.sub_category_name === filters.subCategory)
      );
    });

    //conditions si la réponse est nulle : ne rien afficher
    if (filtered.length > 0) {
      setFilteredData(filtered);
      setNoResults(false);
    } else {
      setFilteredData([]);
      setNoResults(true);
    }
  };

  //fonction qui permet d'afficher les détails d'un produit
  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  //fonction qui permet de revenir à l'acceuil
  const handleHomeClick = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {data && data.length > 0 && (
        <>
          <div className="flex flex-col justify-center items-center">
            <Intro />
            <div className="flex flex-row gap">
              <div className=" top-14 left-0 h-full w-64 bg-white shadow-lg">
                <Sidebar onFilter={handleFilter} ProductData={filteredData} />
              </div>
              <div className="flex flex-col ">
                {/* si le produit à été selectionné renvoyer le détail du produit */}
                {selectedProduct ? (
                  <>
                  <ProductDetail productInfo={selectedProduct} />
                  {/* Bonton retour à l'acceuil */}
                  <button className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
                  transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white"
                  onClick={handleHomeClick}>
                    Acceuil</button>
                    </>
                  ) : (
                    <>
                    {/*Retour des données filtrés */}
                    {noResults ? (
                      <h1 className="text-xl font-bold text-center">No result for the filters you chose.</h1>
                      ) : (
                        /*Retour de toutes les données*/
                      <ProductsList ProductData={filteredData} infoProduct={handleProductClick} />
                    )}
                  </>

                )}

              </div>
            </div>
          </div>
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
