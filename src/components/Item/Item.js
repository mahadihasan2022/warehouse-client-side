import React from 'react';
import { useParams } from 'react-router';

const Item = (props) => {
    const { product, showRemove } = props;
    const { name, img, price, brand, _id, stock } = product;
    return (
        <div className="product sm:w-64 sm:h-64">
        <img src={img} alt=""></img>
        <div className="product-details pl-2">
          <p className="details">Name:{name}</p>
          <p className="details">Brand:{brand}</p>
          <p className="details">Id:{_id}</p>
          <p className="details">price:{price}</p>
          <p className="details">Stock:{stock}</p>
        </div>
        <button onClick={() => showRemove ()} className="btn-cart">
          <p className="btn-text"> Delivered</p>
          
        </button>
      </div>
      );
  };

export default Item;