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
                  {/* Bonton retour à l'accueil */}
                  <button className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
                  transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white"
                  onClick={handleHomeClick}>
                    Accueil</button>
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
