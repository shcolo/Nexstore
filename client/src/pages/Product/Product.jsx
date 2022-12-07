import React, { useState } from 'react'
import './Product.css'

const Product = () => {

const [selectedImg, setSelectedImg] = useState(0)

  const images = [
    'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
        <img src={images[0]} alt="" onClick={e=> setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=> setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>₹199</span>
      </div>
    </div>
  )
}

export default Product