import React from "react";
import Gallery from "./Gallery";
import Card from "./Card";
import { Product } from "../components/interface"; // Assurez-vous d'importer l'interface Product

// on définit les types pour les props
interface DetailProps {
  productInfo: (product: Product) => void;
}

// on déclare le composant fonctionnel (FC) ProductDetail
const ProductDetail: React.FC<DetailProps> = ({ productInfo }) => {
  console.log("This is ProductDetail component");
  return (
    <div className="flex space-x-4">
      <Gallery productInfo={productInfo} />
      <Card productInfo={productInfo} />
      <div className="border-t p-5 flex justify-center items-center">
        <button
          className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
       transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white  "
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
