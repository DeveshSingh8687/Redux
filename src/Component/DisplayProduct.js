import React from 'react'
import './Product.css'
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../Redux/action';

function DisplayProduct({ productData }) {
    const dispatch = useDispatch()
    return (
        <div className='product-container'>
            {
                productData.map((item, id) => {
                    return (
                        <div className='product-item' key={item.id} >
                            <img src={item.avatar} alt='card_image' />
                            <div>ID : {item.id}</div>
                            <div>Name: {item.first_name} {item.last_name}</div>
                            <div>Email : {item.email}</div>
                            <div className='prod_button'>
                                <button onClick={()=>dispatch(addToCart(item))}>Add To Cart</button> &nbsp;
                                <button onClick={()=>dispatch(removeToCart(item.id))}>Remove to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayProduct