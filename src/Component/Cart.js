import React from 'react'
import { useSelector } from 'react-redux'
import './Product.css'

function Cart() {
    const cartData = useSelector((data) => data.cartData)
    console.log(cartData);
    return (
        <div>
            <div className='cart-page-container'>
                <table>
                    <tr>
                        <td>Image</td>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                    </tr>
                    {
                        cartData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td><img src={item.avatar} alt='card_image' /></td>
                                    <td>ID : {item.id}</td>
                                    <td>Name: {item.first_name} {item.last_name}</td>
                                    <td>Email : {item.email}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                <div className='price-detail'>
                    <div className='adjust-price'><span>Amount</span><span>00</span></div>
                    <div className='adjust-price'><span>Discount</span><span>00</span></div>
                    <div className='adjust-price'><span>Price</span><span>00</span></div>
                    <div className='adjust-price'><span>Total</span><span>00</span></div>
                </div>
            </div>
        </div>
    )
}

export default Cart