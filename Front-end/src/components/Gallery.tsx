import React from "react";
import { Product } from "../components/interface";

// on définit les types pour les props
interface GalleryProps {
  productInfo: Product;
}

// on déclare le composant fonctionnel (FC) Gallery
const Gallery: React.FC<GalleryProps> = ({ productInfo }) => {
  console.log("This is Gallery component");

  return (
    // on retourne l'image
    <div className="border border-gray-300 p-5 m-2 transition duration-300 ease-in-out hover:bg-lime-800 hover:bg-opacity-20 flex flex-col items-center">
      <div className="w-full h-64 mb-4 relative">
        <img
          src={productInfo.photo_src}
          alt={`Image de ${productInfo.product_name}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="text-center">
        <h2 className="font-bold text-xl mb-2">{productInfo.product_name}</h2>
      </div>
    </div>
  );
};

export default Gallery;
