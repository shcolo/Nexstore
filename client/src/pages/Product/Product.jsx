import React, { useState } from 'react'
import './Product.css'
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import {FaBalanceScaleLeft} from 'react-icons/fa'
const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quanity, setQuanity] = useState(1)

  const images = [
    'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={e => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>₹199</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio vitae accusantium, similique reiciendis ab accusamus quia perferendis unde, delectus sit quisquam! Necessitatibus,
          quas? Molestias dignissimos quis, perspiciatis voluptatum tenetur voluptate?
        </p>
        <div className="quantity">
          <button onClick={() =>
            setQuanity((prev) => (prev === 1 ? 1 : prev - 1))
          }>-</button>
          {quanity}
          <button onClick={() => setQuanity(prev => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AiOutlineShoppingCart /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <AiOutlineHeart/> ADD TO WISHLIST
          </div>

          <div className="item">
            <FaBalanceScaleLeft/> COMPARE TO BALANCE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}

export default Product