import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  product_name: string;
  category_name: string;
  sub_category_name: string;
  color_name: string;
  photo_src: string;
  material_name: string;
  price: number;
  product_description: string;
  state_name: string;
  user_name: string;
}

const BackOffice: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get<Product[]>(
          "http://localhost:3000/backoffice"
        );
        console.log("productData in backoffice  :", productData);
        setProducts(productData.data);
      } catch (error) {
        console.error("Error fetching users data :", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Backoffice</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.user_name}</td>
                <td className="border px-4 py-2">{product.product_name}</td>
                <td className="border px-4 py-2">{product.state_name}</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                    Validate
                  </button>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BackOffice;
