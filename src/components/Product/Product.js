import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
  const { product, showInventory } = props;
  const { name, img, price, brand, category } = product;
  // console.log(props);
  return (
    <div className="product sm:w-64 sm:h-64">
      <img src={img} alt=""></img>
      <div className="product-details pl-2">
        <p className="details">Name:{name}</p>
        <p className="details">price:{price}</p>
        <p className="details">category:{category}</p>
        <p className="details">Brand:{brand}</p>
      </div>
      <button onClick={() => showInventory ()} className="btn-cart">
        <p className="btn-text"> Contact</p>
        
      </button>
    </div>
    );
};

export default Product;