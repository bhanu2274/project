import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import './Header';
import { context } from './App'
import { UseContext } from 'react';
import { useSelector } from 'react-redux';

function Header(){
  let name = useContext(context)
  let [count, setCount]= useState(null)

  let data = useSelector((state)=>{

    console.log(state)
    return state.user.cartCount

  })
  return (
    <div className='div'>
    <img src='data:image/png;base64,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' height = {'40px'} width={'40px'} alt='swiggy' />

  

    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Offers'>Offers</Link></li>
        <li><Link to='/Help'>Help</Link></li>
        <li><Link to='/Signout'>Signout</Link></li>
        {/* <h3>{name}</h3> */}
        <span>{data}</span>
        <li><Link to='/Cart'>Cart</Link></li>
        
  </ul>
  
  
  </div>
   )
   
  }

export default Header;
