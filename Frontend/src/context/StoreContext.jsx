import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from 'axios'

export const StoreContext=createContext(null)

const StoreContextProvider =(props)=>{

    const url="http://localhost:4000";
    const[token,setToken]=useState("");
    const[food_list,setFood_list]=useState([]);

    const[cartItems,setCartItems]=useState({})

    const addToCart=async(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
            console.log(itemId)
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const removeFromCart=async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const getTotalCartAmount =()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = food_list.find((product)=>product._id === item);
                totalAmount += iteminfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }
    const fetchFood=async()=>{
        const response=await axios.get(url+"/api/food/list");
        setFood_list(response.data.data)
    }
    // const loadCartdata=async(token)=>{
    //     const response=await axios.post(url+"/api/cart/get",{},{headers: {token}})
    //     console.log(response.data.cartData)
    // }
    const loadData=async()=>{
        try {
            await fetchFood();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                // await loadCartdata(token)
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        // async function loadData(){
        //     try {
        //         await fetchFood();
        //         if (localStorage.getItem("token")) {
        //             setToken(localStorage.getItem("token"));
        //             await loadCartdata(localStorage.getItem("token"))
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        loadData();
    },[])

    const contextvalue={
       food_list,
       cartItems,
       setCartItems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
       url,
       token,
       setToken
    }
    return(
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider ;