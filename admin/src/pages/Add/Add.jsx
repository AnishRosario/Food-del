import {useState } from 'react'
import { assets } from '../../assets/assets'
import './Add.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {
   
    const[image,setimage]=useState(false);
    const[data,Setdata]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        Setdata(data=>({...data,[name]:value}))
    }
    const onsubmitHandler=async(event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",data.price)
        formData.append("category",data.category)
        formData.append("image",image)

        const response=await axios.post(`${url}/api/food/add`,formData)
        if(response.data.success){
            Setdata({
                name:"",
                description:"",
                price:"",
                category:"Salad"
            })
            setimage(false)
            toast.success(response.data.message)
        }else{
            toast.error(response.data.message)
        }
    }
 
  return (
    <div className='add'>
        <form className='flex-col'onSubmit={onsubmitHandler}>
            <div className='add-img-upload flex-col '>
                <p>upload image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area}/>
                </label>
                <input onChange={(e)=>{setimage(e.target.files[0])}} type="file" id='image' hidden required />
            </div>
            <div className='add-product-name flex-col'>
                <p>Product name</p>
                <input type="text" onChange={onChangeHandler} value={data.name} name='name' placeholder='typr here' required />
            </div>
            <div className='add-product-description flex-col'>
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name='description' rows='6' placeholder='write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className='add-category flex-col'>
                    <p>Product category</p>
                    <select onChange={onChangeHandler} name="category">
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure veg">Pure veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' required />
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add