import React from "react";
import Select from "../components/Select";
import {
  categoryOptions,
  subCategoryOptions,
  colorOptions,
  materialOptions,
} from "../utils/CatalogOptions";

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
  product_category: string;
  sub_category: string;
  product_color: string;
  product_materials: string;
  price: number;
  product_description: string;
  product_state: string;
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
          htmlFor="product_name"
          className="block text-sm font-semibold text-gray-700"
        >
          Nom du meuble à vendre
        </label>
        <input
          required
          type="text"
          name="product_name"
          id="product_name"
          value={values.product_name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
        />
      </div>

      {/* select Catégorie */}
      <div>
        <Select
          id="product_category"
          name="product_category"
          value={values.product_category}
          onChange={handleChange}
          options={categoryOptions}
          label="Ambiance"
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
        />
      </div>

      {/* select Sous-catégorie */}
      <div>
        <Select
          id="sub_category"
          name="sub_category"
          value={values.sub_category}
          onChange={handleChange}
          options={subCategoryOptions}
          label="Type"
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
        />
      </div>

      {/* select Couleur */}
      <div>
        <Select
          id="product_color"
          name="product_color"
          value={values.product_color}
          onChange={handleChange}
          options={colorOptions}
          label="Couleur"
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
        />
      </div>

      {/* select Matière */}
      <div>
        <Select
          id="product_materials"
          name="product_materials"
          value={values.product_materials}
          onChange={handleChange}
          options={materialOptions}
          label="Matière"
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
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
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
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
          className="mt-1 block w-full rounded-none border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out py-2"
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
