import React from 'react'
import './NewArrivals.css'
import NewCollections from'../Assets/newcollections'
import Item from '../items/item'
const NewArrivals = () => {
  return (
    <div clasName="InsideArrivals">
        <h1 className='arrivalh1'>New Arrivals</h1>
        <hr className='arrivalhr'/>
        <div className="Arrivals">
            
            {NewCollections.map((arrival,i)=>{
                return (
                <div>
                    <div className='newIcon'>Fresh</div>
                    <Item key={i} id={arrival.id} name={arrival.name} image={arrival.image} price ={arrival.price}/>
                
                </div>

                )
            })}
        </div>

    </div>
  )
}


export default NewArrivals;