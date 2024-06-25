import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h2>Explore our menu</h2>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, sequi id soluta omnis ab perferendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, aspernatur!</p>
        <div className="explore-list-menu">
            {
             menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-list-menu-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
             })
            }
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu