import React, { createContext, useContext, useEffect, useState } from 'react';
import { productsmain as x } from "../mainpro.js";
import { products } from '../prohome.js';

const ProductContext = createContext([]);

function GetPro({ children }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(x);
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () =>{
    const pro=useContext(ProductContext);
    return pro
} 
const  useProductdetail=(id)=>{
const products=useContext(ProductContext)
const res=products.find((pro)=>pro.id===id)
console.log(id)
return res

}


export default GetPro;
export { useProduct , useProductdetail};
