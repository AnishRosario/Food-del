import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setshowLogin}) => {
    const[currState,setcurrState]=useState("Login")
  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">

        <h2>{currState}</h2>
        <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-up-inputs">
            {currState==="Login"?<></>:
            <input type="text" placeholder='your name' required />}
            <input type="email" placeholder='your email' required />
            <input type="password" placeholder='your password' required />
        </div>
        <button>{currState==="Signup"?"Create an account":"Login"}</button>
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