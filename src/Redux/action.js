import { Add_To_Cart, Empty_Cart, Remove_To_Cart } from "./constant"
export const addToCart = (data)=>{
    return {
        type:Add_To_Cart,
        data
    }
}

export const removeToCart = (data)=>{
    return {
        type:Remove_To_Cart,
        data
    }
}

export const emptyCart = ()=>{
    return {
        type: Empty_Cart,
    }
}
