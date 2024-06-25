import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/LoginPopup/Loginpopup'

function App() {
  const[showLogin,setshowLogin]=useState(false);
  return (
    <>
    {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
       <Navbar setshowLogin={setshowLogin}/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Placeorder/>} />
       </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
