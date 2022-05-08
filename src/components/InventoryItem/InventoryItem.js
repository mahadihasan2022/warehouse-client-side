import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Item from '../Item/Item';
import './InventoryItem.css';

const InventoryItem = () => {
        const [products, setProducts] = useState([]);
        const navigate = useNavigate();
     
      
        useEffect(() => {
          fetch("http://localhost:5000/inventory")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        }, []);
      
        
        const showRemove = (_id) =>{
         console.log('delete', _id);
        }

        const showManageInventories = () =>{
          console.log('click');
          const path = `/manageinventories`;
          navigate(path);
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
          <p className='text-center p-8'><button onClick={() => showManageInventories() } className='btn-btn w-20 h-12'>See All</button></p>
        </div>
      </div>
    );
  };

export default InventoryItem;