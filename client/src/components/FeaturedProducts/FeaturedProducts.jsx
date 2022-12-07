import React from 'react'
import './FeaturedProducts.css'
import Card from '../Card/Card'

function FeaturedProducts({ type }) {

    const data = [
        {
            id: 1,
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 2,
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 3,
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: false,
            oldPrice: 19,
            newPrice: 12,
        },
        {
            id: 4,
            img: 'https://images.unsplash.com/photo-1602371021206-89305975f322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            imgHover: 'https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            title: 'Long Sleeves Shirt with button',
            isNew: true,
            oldPrice: 19,
            newPrice: 12,
        }
    ]

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} Product</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cumque minima temporibus a atque! Ab blanditiis consequuntur fuga, beatae iure quasi, impedit ducimus perspiciatis minus placeat voluptas dignissimos dicta nostrum.</p>
            </div>
            <div className="bottom">
                {data?.map(item =>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts