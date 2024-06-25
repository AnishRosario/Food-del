import React, { useContext } from 'react'
import './FoodDisplay.css'

import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'
const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
     <h2>Top Dishes near you</h2>
     <div className="food-list-item">
        {
            food_list.map((item,index)=>{
                if(category==='All' || category===item.category){

                    return(
                      <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
                    )
                }
            })
        }
     </div>
    </div>
  )
}

export default FoodDisplay