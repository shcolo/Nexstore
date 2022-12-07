import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Acceories</span>
          <span>New Arival</span>
        </div>

        <div className="item">
          <h1>Link</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptati
            bus impedit alias facere, magnam ullam repudiandae ut minus cumque deserunt
            illo maxime officiis perferendis recusandae dolor! Veritatis minus sapiente
            ex autem!</span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptati
            bus impedit alias facere, magnam ullam repudiandae ut minus cumque deserunt
            illo maxime officiis perferendis recusandae dolor! Veritatis minus sapiente
            ex autem!</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Nexus</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer