import React from 'react'
import './Header.scss';
import Logo from '../../assets/img/logo.png'

export const Header = () => {
  return (
    <div className='header'>
        <img src={Logo} alt='Notes-Simulator'/>
        <h1>Notes Simulator</h1>
    </div>
  )
}
