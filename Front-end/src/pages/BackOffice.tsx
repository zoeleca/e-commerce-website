import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

// interface Product {
//   id: number;
//   name: string;
//   state: string;
// }

interface Product {
  product_id: number;
  product_name: string;
  category_name: string;
  sub_category_name: string;
  color_name: string;
  photo_src: string;
  material_name: string;
  price: number;
  product_description: string;
  state_name: string;
}

const BackOffice: React.FC = () => {
  console.log("helloWorld");

  // Test objects
  // const lesProduits: Product = {
  //   id: 1,
  //   name: "chaise",
  //   state: "en review",
  // };

  // const lesUsers: User = {
  //   id: 1,
  //   name: "valentin",
  // };

  // const lesUsersArray: User[] = [lesUsers];

  // useState(() => {
  //   setProducts([lesProduits]);
  //   setUsers([lesUsers]);
  // }, []);

  const [users, setUsers] = useState<User[]>(lesUsersArray);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get<User[]>(
          "http://localhost:3000/backoffice"
        );
        const productData = await axios.get<Product[]>(
          "http://localhost:3000/backoffice"
        );
        // setUsers(userData.data);
        console.log("productData :", productData);
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
            {lesUsersArray.map((user) =>
              products.map((product) => (
                <tr key={`${user.id}-${product.id}`}>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.state}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                      Validate
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BackOffice;
