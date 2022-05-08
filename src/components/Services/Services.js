import React, { useEffect, useState } from "react";
import {  useNavigate} from "react-router-dom";
import Product from "../Product/Product";
import './Services.css'

const Services = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://afternoon-reef-38690.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  
  const showInventory = () =>{
     const path = `/Inventory`;
     navigate(path);
  }
 
  return (
    <div className="cont-cont">
      <div className=" md:p-16">
        <div className="grid">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-gap-4">
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                showInventory={showInventory}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
