import React, { useContext   } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,image,price,description}) => {
    
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-list-container">
            <img className='food-list-image' src={url+"/images/"+image} alt="" />
            {!cartItems[id]?
             <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
             :<div className='food-item-counter'>
               <img onClick={()=>removeFromCart(id)}  src={assets.remove_icon_red} alt="" />
               <p>{cartItems[id] }</p>
               <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
             </div>
            }
        </div>
        <div className="food-list-info">
            <div className="food-list-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
                <p className='food-list-desc'>{description}</p>
                <p className='food-list-price'>${price} </p>
        </div>
    </div>
  )
}

export default FoodItem