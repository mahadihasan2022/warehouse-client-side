import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'


const Inventory = () => {
    return (
        <div className='inventory-container'>
         <InventoryItem></InventoryItem>
        </div>
    );
};

export default Inventory;