import React, { useState } from "react";
import { Product } from "./interface";

interface SidebarProps {
  onFilter: (filters: { color: string; material: string; category: string; subCategory: string }) => void;
  ProductData: Product[];
}

const Sidebar: React.FC<SidebarProps> = ({ onFilter, ProductData }) => {
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleFilter = () => {
    const filters = { color, material, category, subCategory };
    onFilter(filters);
  };

  return (
    <>
      <aside className="bg-amber-200 p-4 h-screen fixed top-0 left-0">
        <div>
          <label htmlFor="color">Couleur</label>
          <br />
          <select id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)}>
            <option value=""></option>
            <option value="blanc">Blanc</option>
            <option value="gris">Gris</option>
            <option value="noir">Noir</option>
            <option value="jaune">Jaune</option>
            <option value="bleu">Bleu</option>
            <option value="chêne miel">Chêne miel</option>
            <option value="vert sauge">Vert Sauge</option>
            <option value="multicolore">Multicolore</option>
          </select>
        </div>

        <div>
          <label htmlFor="materials">Matières</label>
          <br />
          <select id="materials" name="materials" value={material} onChange={(e) => setMaterial(e.target.value)}>
            <option value=""></option>
            <option value="bois">Bois</option>
            <option value="metal">Metal</option>
            <option value="cuir">Cuir</option>
            <option value="tissu">Tissu</option>
            <option value="verre">Verre</option>
            <option value="plastique">Plastique</option>
            <option value="marbre">Marbre</option>
            <option value="divers">Divers</option>
          </select>
        </div>

        <div>
          <label htmlFor="categories">Catégories</label>
          <br />
          <select id="categories" name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=""></option>
            <option value="salon">Salon</option>
            <option value="chambre">Chambre</option>
            <option value="cuisine">Cuisine</option>
            <option value="salle de bain">Salle de bain</option>
            <option value="salle à manger">Salle à manger</option>
          </select>
        </div>

        <div>
          <label htmlFor="sub_categories">Sous-catégories</label>
          <br />
          <select id="sub_categories" name="sub_categories"  value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
            <option value=""></option>
            <option value="chaise">Chaise</option>
            <option value="table">Table</option>
            <option value="canapé">Canapé</option>
            <option value="lit">Lit</option>
            <option value="armoire">Armoire</option>
          </select>
        </div>
        <br />
        <button onClick={handleFilter}>Select</button>
      </aside>

    </>
  );
};

export default Sidebar;

// console.log("This is Sidebar components");
// // États pour suivre l'état d'ouverture des menus déroulants
// const [categoriesOpen, setCategoriesOpen] = useState(false);
// const [productsOpen, setProductsOpen] = useState(false);
// const [materialsOpen, setMaterialsOpen] = useState(false);
// const [colorsOpen, setColorsOpen] = useState(false);
//   return (

//     <aside className="bg-amber-200 p-4 h-screen fixed top-0 left-0">
//       {/* Catégories */}
//       <div className="mb-4">
//         <button
//           className="w-full bg-yellow-500 text-white p-2 rounded"
//           onClick={() => setCategoriesOpen(!categoriesOpen)}
//         >
//           Catégories
//         </button>
//         {categoriesOpen && (
//           <div className="pl-4">
//             <ul>
//               <li><a href="/salon">Salon</a></li>
//               <li><a href="/chambre">Chambre</a></li>
//               <li><a href="/cuisine">Cuisine</a></li>
//               <li><a href="/salle-de-bain">Salle de bain</a></li>
//               <li><a href="/salle-a-manger">Salle à manger</a></li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Produits */}
// <div className="mb-4 space-y-2">
//   <button
//     className="bg-yellow-500 text-white p-2 rounded w-full"
//     onClick={() => setProductsOpen(!productsOpen)}
//   >
//     Produits
//   </button>
//   {productsOpen && (
//     <div className="pl-4">
//       <ul>
//         <li><a href="/chaise">Chaise</a></li>
//         <li><a href="/table">Table</a></li>
//         <li><a href="/canapé">Canapé</a></li>
//         <li><a href="/lit">Lit</a></li>
//         <li><a href="/armoire">Armoire</a></li>
//       </ul>
//     </div>
//   )}
// </div>

// {/* Matières */}
// <div className="mb-4 space-y-2">
//   <button
//     className="bg-yellow-500 text-white p-2 rounded w-full"
//     onClick={() => setMaterialsOpen(!materialsOpen)}
//   >
//     Matières
//   </button>
//   {materialsOpen && (
//     <div className="pl-4">
//       <ul>
//         <li><a href="/bois">Bois</a></li>
//         <li><a href="/metal">Métal</a></li>
//         <li><a href="/cuir">Cuir</a></li>
//         <li><a href="/tissu">Tissu</a></li>
//         <li><a href="/verre">Verre</a></li>
//         <li><a href="/plastique">Plastique</a></li>
//         <li><a href="/marbre">Marbre</a></li>
//         <li><a href="/divers">Divers</a></li>
//       </ul>
//     </div>
//   )}
// </div>

// {/* Couleurs */}
// <div className="mb-4 space-y-2">
//   <button
//     className="bg-yellow-500 text-white p-2 rounded w-full"
//     onClick={() => setColorsOpen(!colorsOpen)}
//   >
//     Couleurs
//   </button>
//   {colorsOpen && (
//     <div className="pl-4">
//       <ul>
//         <li><a href="/blanc">Blanc</a></li>
//         <li><a href="/gris">Gris</a></li>
//         <li><a href="/noir">Noir</a></li>
//         <li><a href="/jaune">Jaune</a></li>
//         <li><a href="/bleu">Bleu</a></li>
//         <li><a href="/chêne miel">Chêne miel</a></li>
//         <li><a href="/vert sauge">Vert sauge</a></li>
//         <li><a href="/multicolore">Multicolore</a></li>
//       </ul>
//     </div>
//   )}
// </div>
//     </aside>
//   );
