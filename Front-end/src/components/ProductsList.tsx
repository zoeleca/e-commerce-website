import React from "react";

//Define the interface for props 
interface Product {
    product_id: number;
    photo_src: string;
    product_name: string;
}

// Define the type for the props
interface ProductListProps {
    ProductData: Product[]; // `ProductData` prop expects an array of `Product` objects
  }

  const ProductList: React.FC<ProductListProps> = ({ ProductData }) => {

    console.log("This is ProductsList components")
    return (
        <>
        {ProductData.map((item, index) => (
            <div className="card">
                <h2>{item.product_name}</h2>
                <img src={item.photo_src} alt={item.product_name} style={{ width: "400px" }}/>
            </div>
        ))
    }
    </>
    )
}

export default ProductList

/* */