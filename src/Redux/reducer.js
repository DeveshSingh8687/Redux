import { Add_To_Cart, Empty_Cart, Remove_To_Cart } from "./constant";

export const cartData = (data = [], action) => {

    switch (action.type) {
        case Add_To_Cart:
            return [action.data, ...data];
        case Remove_To_Cart:
            let arrcopy = [...data]
            const remainingItems = arrcopy.filter((val)=>val.id !== action.data)
            return [...remainingItems]
        case Empty_Cart:
            data = []
            return [...data];
        default:
            return data
    }
}