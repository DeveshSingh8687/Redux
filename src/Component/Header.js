import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Product.css'

function Header() {
    const result = useSelector((data) => data.cartData)
    return (
        <div className='header'>
            <Link to='/'>
                <div className='header-logo'>
                    <img src='https://st2.depositphotos.com/3591429/12552/i/450/depositphotos_125524360-stock-photo-diversity-friends-near-wall-with.jpg' />
                </div>
            </Link>
            <Link to='/cart'>
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src='https://freepngimg.com/thumb/cart/10-2-cart-png-pic-thumb.png' />
                </div>
            </Link>
        </div>
    )
}

export default Header