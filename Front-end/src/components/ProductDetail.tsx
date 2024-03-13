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
    </div>
  );
};

export default ProductDetail;
