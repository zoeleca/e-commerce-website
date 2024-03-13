import React, { useState } from "react";
import { Product } from "./interface";
import {
  categoryOptions,
  subCategoryOptions,
  colorOptions,
  materialOptions,
} from "../utils/CatalogOptions";
import Select from "../components/Select";

interface SidebarProps {
  onFilter: (filters: {
    color: string;
    material: string;
    category: string;
    subCategory: string;
  }) => void;
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
      <aside className="bg-white p-4">
        <div className="mb-4">
          <div>
            <Select
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              options={colorOptions}
              label="Couleur"
              className="bg-gray-200"
            />
          </div>

          <div>
            <Select
              id="materials"
              name="materials"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              options={materialOptions}
              label="Matière"
              className="bg-gray-200"
            />
          </div>

          <div>
            <Select
              id="categories"
              name="categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              options={categoryOptions}
              label="Ambiance"
              className="bg-gray-200"
            />
          </div>

          <div>
            <Select
              id="sub_categories"
              name="sub_categories"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              options={subCategoryOptions}
              label="Type"
              className="bg-gray-200"
            />
          </div>
        </div>

        <button
          className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-emerald-700 bg-opacity-10
       transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white  "
          onClick={handleFilter}
        >
          Select
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
