import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const InventoryItem = () => {
        const [products, setProducts] = useState([]);
     
      
        useEffect(() => {
          fetch("http://localhost:5000/inventory")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        }, []);
      
        
        const showRemove = (_id) =>{
         console.log('delete', _id);
        }
    return (
        <div className="cont-cont">
            <h1 className='text-center font-bold text-5xl p-4'>Available Item: { products.length}</h1>
        <div className=" md:p-16">
          <div className="grid">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-gap-4">
              {products.map((product) => (
                <Item
                  key={product._id}
                  product={product}
                  showRemove={showRemove}
                ></Item>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default InventoryItem;