import React from "react";
import { Product } from "../components/interface";

// on définit les types pour les props
interface CardProps {
  productInfo: Product;
}

// on déclare le composant fonctionnel (FC) Card
const Card: React.FC<CardProps> = ({ productInfo }) => {
  console.log("This is Card component");
  return (
    // on retourne la fiche info produit
    <div className="border border-gray-300 p-5 m-2 flex flex-col justify-between transition duration-300 ease-in-out hover:bg-lime-800 hover:bg-opacity-20">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl mb-2">{productInfo.product_name}</h2>
        <p className="text-base mb-2">
          Description: {productInfo.product_description}
        </p>
        <p className="text-base mb-2">Categorie: {productInfo.category_name}</p>
        <p className="text-base mb-2">
          Sous-categorie: {productInfo.sub_category_name}
        </p>
        <p className="text-base mb-2">Couleur: {productInfo.color_name}</p>
        <p className="text-base mb-2">Matière: {productInfo.material_name}</p>
      </div>
      <div className="pt-2">
        <p className="font-semibold text-lg">Prix: {productInfo.price}€</p>
      </div>
    </div>
  );
};

export default Card;
