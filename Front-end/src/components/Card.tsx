import React from 'react';

// Étape 1 : Définir l'interface pour les propriétés de 'product'
interface productInfo {
  product_name: string;
  product_description: string;
  product_category: string;
  sub_category: string;
  product_color: string;
  product_materials: string;
  price: number;
}

// Étape 2 : Utiliser l'interface pour typer les props du composant
interface CardProps {
    productInfo: productInfo; 
}

const Card: React.FC<CardProps> = ({ productInfo }) => { 
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>{productInfo.product_name}</h2>
      <p>Description: {productInfo.product_description}</p>
      <p>Categorie: {productInfo.product_category}</p>
      <p>Sous-categorie: {productInfo.sub_category}</p>
      <p>Couleur: {productInfo.product_color}</p>
      <p>Matière : {productInfo.product_materials}</p>
      <p>Prix: {productInfo.price}€</p>
    </div>
  );
};

export default Card;