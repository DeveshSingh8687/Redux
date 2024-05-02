import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../Redux/action'
import { ProductList } from '../Redux/ProductAction'
import DisplayProduct from './DisplayProduct'

function Main() {
  const dispatch = useDispatch()
  const prodData = useSelector((data) => data.productData)
  useEffect(()=>{dispatch(ProductList())},[])
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button> &nbsp;
      </div>
      <DisplayProduct productData={prodData} />
    </div>
  )
}

export default Main