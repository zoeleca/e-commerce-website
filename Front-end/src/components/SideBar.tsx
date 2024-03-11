import React, { useState } from 'react';

const Sidebar: React.FC = () => {

  console.log("This is Sidebar components")
  // États pour suivre l'état d'ouverture des menus déroulants
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [colorsOpen, setColorsOpen] = useState(false);

  return (
    <aside className="bg-amber-200 p-4 h-screen fixed top-0 left-0">
      {/* Catégories */}
      <div className="mb-4">
        <button
          className="w-full bg-yellow-500 text-white p-2 rounded"
          onClick={() => setCategoriesOpen(!categoriesOpen)}
        >
          Catégories
        </button>
        {categoriesOpen && (
          <div className="pl-4">
            <ul>
              <li><a href="/salon">Salon</a></li>
              <li><a href="/chambre">Chambre</a></li>
              <li><a href="/cuisine">Cuisine</a></li>
              <li><a href="/salle-de-bain">Salle de bain</a></li>
              <li><a href="/salle-a-manger">Salle à manger</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* Produits */}
<div className="mb-4 space-y-2">
  <button
    className="bg-yellow-500 text-white p-2 rounded w-full"
    onClick={() => setProductsOpen(!productsOpen)}
  >
    Produits
  </button>
  {productsOpen && (
    <div className="pl-4">
      <ul>
        <li><a href="/chaise">Chaise</a></li>
        <li><a href="/table">Table</a></li>
        <li><a href="/canapé">Canapé</a></li>
        <li><a href="/lit">Lit</a></li>
        <li><a href="/armoire">Armoire</a></li>
      </ul>
    </div>
  )}
</div>

{/* Matières */}
<div className="mb-4 space-y-2">
  <button
    className="bg-yellow-500 text-white p-2 rounded w-full"
    onClick={() => setMaterialsOpen(!materialsOpen)}
  >
    Matières
  </button>
  {materialsOpen && (
    <div className="pl-4">
      <ul>
        <li><a href="/bois">Bois</a></li>
        <li><a href="/metal">Métal</a></li>
        <li><a href="/cuir">Cuir</a></li>
        <li><a href="/tissu">Tissu</a></li>
        <li><a href="/verre">Verre</a></li>
        <li><a href="/plastique">Plastique</a></li>
        <li><a href="/marbre">Marbre</a></li>
        <li><a href="/divers">Divers</a></li>
      </ul>
    </div>
  )}
</div>

{/* Couleurs */}
<div className="mb-4 space-y-2">
  <button
    className="bg-yellow-500 text-white p-2 rounded w-full"
    onClick={() => setColorsOpen(!colorsOpen)}
  >
    Couleurs
  </button>
  {colorsOpen && (
    <div className="pl-4">
      <ul>
        <li><a href="/blanc">Blanc</a></li>
        <li><a href="/gris">Gris</a></li>
        <li><a href="/noir">Noir</a></li>
        <li><a href="/jaune">Jaune</a></li>
        <li><a href="/bleu">Bleu</a></li>
        <li><a href="/chêne miel">Chêne miel</a></li>
        <li><a href="/vert sauge">Vert sauge</a></li>
        <li><a href="/multicolore">Multicolore</a></li>
      </ul>
    </div>
  )}
</div>
    </aside>
  );
};

export default Sidebar;
