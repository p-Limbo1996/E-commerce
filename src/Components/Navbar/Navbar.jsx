import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import cart_icon from "../assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContex'

const Navbar = () => {

    const[menu,setMenu]=useState('shop')
    const {getTotoalCartItems}=useContext(ShopContext)
  return (

    <div className='navbar'>

        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu('shop')}}><Link to="/" style={{textDecoration:"none" ,color:"#626262"}}>Shop</Link> {menu==='shop'?<hr />:<></>} </li>
            <li onClick={()=>{setMenu('men')}}><Link to="/mens" style={{textDecoration:"none" ,color:"#626262"}}>Men</Link> {menu==='men'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('women')}}><Link to="/womens" style={{textDecoration:"none" ,color:"#626262"}}>Women</Link> {menu==='women'?<hr />:<></>}</li>
            <li onClick={()=>{setMenu('kids')}}><Link to="/kids" style={{textDecoration:"none" ,color:"#626262"}}>Kids</Link> {menu==='kids'?<hr />:<></>}</li>
        </ul>

        <div className="nav-login-card">
           <Link to="/login" ><button>Login</button></Link>
           <Link to="/cart" ><img src={cart_icon} alt="" /></Link>
           
           <div className="nav-card-count">{getTotoalCartItems()}</div>
        </div>

    </div>

  )
}

export default Navbar