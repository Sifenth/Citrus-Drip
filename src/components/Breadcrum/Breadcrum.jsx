import React from 'react'
import './Breadcrum.css'
import arrowIcon from '../Assets/images/right-arrow.png'
import ProductDetail from '../../pages/ProductDetail';
const Breadcrum = (props) => {
    const {product} = props;
  return (
    
    <div className='breadcrum'>
        HOME <img src={arrowIcon} alt="arrow" /> SHOP <img src={arrowIcon} alt="" />  {product?.name || 'Product'}

    </div>
  )
}
export default Breadcrum;