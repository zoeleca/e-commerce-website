import React from "react";

import { Product } from "../components/interface";

//definir le type pour les props
interface ProductListProps {
  className?: string; //propriété pour la personnalisation du style
  ProductData: Product[];  //Tableau d'objets Product à afficher dans la liste
  infoProduct: (product: Product) => void; // Fonction pour gérer le clic sur un produit
}

//Composant fonctionnel pour rendre une liste de produits
const ProductList: React.FC<ProductListProps> = ({ ProductData , infoProduct}) => {
  return (
    <>
      <div className="border-l border-r p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {ProductData.map((item) => (
          <div key={item.product_id} onClick={() => infoProduct(item)} className="border p-4 flex flex-col justify-between transition duration-300 ease-in-out hover:bg-amber-800 hover:bg-opacity-10">
            <div className="flex flex-col">
              <div className="w-full h-40 mb-2">
                <img
                  src={item.photo_src}
                  alt={item.product_name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between mb-2 pt-2">
                <h3 className="font-helvetica">#{item.category_name}</h3>
                <h2 className="font-helvetica text-l font-bold">
                  {item.price} €
                </h2>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-center pt-5 pb-5">
                <h1 className="font-helvetica text-l font-bold text-center">
                  {item.product_name}
                </h1>
              </div>
              <div className="border-t p-5 flex justify-center items-center">
                <button
                  className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
       transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white  "
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;