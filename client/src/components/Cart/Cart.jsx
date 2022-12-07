import React from 'react'
import './Cart.css'
import {AiOutlineDelete} from 'react-icons/ai'

const Cart = () => {
    const data = [
        {
            id: 1,
            desc: "igehphpoo",
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            desc: "igehphpoo",
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 3,
            desc: "igehphpoo",
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: false,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 4,
            desc: "igehphpoo",
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        }
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">
                        1 x ₹{item.newPrice}
                    </div>
                </div>
        <AiOutlineDelete className='delete' />
            </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>BUTTON TO CHECKOUT</button>
        <span className="reset">RESET</span>
    </div>
  )
}

export default Cart