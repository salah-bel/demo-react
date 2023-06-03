import React, { useState, useEffect, useCallback } from "react";
import { Route, Switch, useNavigate  } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIseLoaded] = useState(false);
  const navigate = useNavigate();


  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      setProducts(await response.json());
      setIseLoaded(true)
      console.log(isLoaded)
    } catch (err) {
      if (err) {
        console.log(err)
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [isLoaded])

  // delete
  const deleteOneProduct = async (id) => {
    try {
      await fetch("http://localhost:3000/products/" + id, {method: 'DELETE'});
      fetchProducts()
      // navigate('/products');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

 
  return (
    <div>
        <h1>
          {products.length>0?products.length:"Aucun"} Produit{products.length>0&&"s"} trouvé{products.length>0&&"s"}
        </h1>

         {products.map(p=><Product
            key={p.id}
            title={p.title}
            price={p.price}
            desc={p.desc}
            onButtonClick={()=>{deleteOneProduct(p.id)}}
         />)}
    </div>
  );
}

export default ProductList;
