import React from "react";

import { Product } from "../components/interface";

// Define the type for the props
interface ProductListProps {
  className?: string;
  ProductData: Product[]; // `ProductData` prop expects an array of `Product` objects
}

const ProductList: React.FC<ProductListProps> = ({ ProductData }) => {
  return (
    <>
      <div className="border-l border-r p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {ProductData.map((item) => (
          <div className="border p-4 flex flex-col justify-between transition duration-300 ease-in-out hover:bg-lime-800 hover:bg-opacity-20">
            <div className="flex flex-col">
              <div className="w-full h-40 mb-2 relative">
                <img
                  src={item.photo_src}
                  alt={item.product_name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between mb-2 pt-2">
                <h3 className="font-helvetica">#{item.category_name}</h3>
                <h2 className="font-helvetica text-l font-bold">
                  {item.price} €
                </h2>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-center pt-5 pb-5">
                <h1 className="font-helvetica text-l font-bold text-center">
                  {item.product_name}
                </h1>
              </div>
              <div className="border-t p-5 flex justify-center items-center">
                <button
                  className="font-helvetica border border-solid border-gray-400 rounded-lg p-2 bg-emerald-700 bg-opacity-10
       transition duration-300 ease-in-out hover:bg-red-800 hover:bg-opacity-80 hover:text-white  "
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;