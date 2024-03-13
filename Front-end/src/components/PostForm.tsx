import React from "react";
import Select from "../components/Select";
import { categoryOptions, subCategoryOptions, colorOptions, materialOptions } from '../utils/CatalogOptions';

// Interface pour les props
interface PostFormProps {
  values: FormValues;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

// Définition du type des valeurs du formulaire
export interface FormValues {
  product_name: string;
  category_name: string;
  sub_category_name: string;
  color_name: string;
  material_name: string;
  price: number;
  product_description: string;
  state_name: string;
}

const PostForm: React.FC<PostFormProps> = ({
  values,
  handleChange,
  handleSubmit,
}) => (
  // on render le form
  <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-lg">
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* champ nom */}
      <div>
        <label
          htmlFor="itemName"
          className="block text-sm font-semibold text-gray-700"
        >
          Nom du meuble à vendre
        </label>
        <input
          required
          type="text"
          name="product_name"
          id="itemName"
          value={values.product_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out"
        />
      </div>

      {/* champ Catégorie */}
      <div>
        <Select
          id="category"
          name="category_name"
          value={values.category_name}
          onChange={handleChange}
          options={categoryOptions}
          label="Catégorie"
        />
      </div>

      {/* champ Sous-catégorie */}
      <div>
        <Select
          id="subcategory"
          name="sub_category_name"
          value={values.sub_category_name}
          onChange={handleChange}
          options={subCategoryOptions}
          label="Sous-catégorie"
        />
      </div>

      {/* champ Couleur */}
      <div>
        <Select
          id="color"
          name="color_name"
          value={values.color_name}
          onChange={handleChange}
          options={colorOptions}
          label="Couleur"
        />
      </div>

      {/* champ Matière */}
      <div>
        <Select
          id="material"
          name="material_name"
          value={values.material_name}
          onChange={handleChange}
          options={materialOptions}
          label="Matière"
        />
      </div>

      {/* champ Description */}
      <div>
        <label
          htmlFor="product_description"
          className="block text-sm font-semibold text-gray-700"
        >
          Description de l'objet
        </label>
        <input
          required
          type="text"
          name="product_description"
          id="product_description"
          value={values.product_description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out"
        />
      </div>

      {/* champ Prix */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-semibold text-gray-700"
        >
          Prix rond (en Euro)
        </label>
        <input
          required
          type="number"
          name="price"
          id="price"
          value={values.price}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out"
        />
      </div>

      {/* bouton submit */}
      <button
        type="submit"
        className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-amber-800 bg-opacity-10
        transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white"
      >
        Envoyer
      </button>
    </form>
  </div>
);

export default PostForm;
