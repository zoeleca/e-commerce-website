import React from "react";
import Gallery from '../components/Gallery';
import Card from '../components/Card';
import ProductsList from '../components/ProductsList';

const ProductDetail = () => {
  console.log("This is ProductDetail components")
  
  return (<>

    <Gallery/>
    <Card/>
    <ProductsList/>
    
    </>
  )
}

export default ProductDetail