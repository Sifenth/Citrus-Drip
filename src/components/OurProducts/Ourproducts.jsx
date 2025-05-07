import React from 'react'
import './Ourproducts.css'
import Dataproducts from '../Assets/data'
import Item from '../items/item'

const Ourproducts = () => {
  return (
    <div className='Ourproducts'>
        <h1>Our Products</h1>
        <hr />
        <div className='Underproducts'>
            {Dataproducts.map((items,i)=>{
                return (<Item  key={i} id={items.id} name={items.name} image={items.image} price={items.price} />);
            })}
        </div>

    </div>
  )
}

export default Ourproducts;
