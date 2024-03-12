import React from "react";
import { Product } from "../components/interface";

interface CardProps {
  productInfo: Product;
}

const Card: React.FC<CardProps> = ({ productInfo }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>{productInfo.product_name}</h2>
      <p>Description: {productInfo.product_description}</p>
      <p>Categorie: {productInfo.category_name}</p>
      <p>Sous-categorie: {productInfo.sub_category_name}</p>
      <p>Couleur: {productInfo.color_name}</p>
      <p>Matière : {productInfo.material_name}</p>
      <p>Prix: {productInfo.price}€</p>
    </div>
  );
};

export default Card;
