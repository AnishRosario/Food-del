import { createContext, useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const Loginpopup = ({setshowLogin}) => {
    const[currState,setcurrState]=useState("Login")
    const[data,setdata]=useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setdata(data=>({...data,[name]:value}))
    }
     const {url,token,setToken}=useContext(StoreContext)

     const onLogin=async(event)=>{
          event.preventDefault()

          let newurl=url;
          if(currState=="Login"){
            newurl=url+"/api/user/login";
          }
          else{
            newurl=url+"/api/user/register";
          }
          const response=await axios.post(newurl,data);
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setshowLogin(false)
          }
          else{
            alert(response.data.message)
          }
          
     }
  

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">

        <h2>{currState}</h2>
        <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-up-inputs">
            {currState==="Login"?<></>:
            <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='your name' required />
            }
            <input onChange={onChangeHandler} name='email' value={data.email} type="email" placeholder='your email' required />
            <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='your password' required />
        </div>
        <button type='submit'>{currState==="Signup"?"Create an account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing,i agree to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"?
        <p>Create an account? <span onClick={()=>setcurrState("Signup")}>Click here</span></p>:
        <p>Already have an account <span onClick={()=>setcurrState("Login")}>Click here</span></p>
        }
      </form>
    </div>
  )
}

export default Loginpopup