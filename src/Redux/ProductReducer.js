import { Product_List, Set_Product_List } from "./constant";

export const productData =(data=[],action)=>{
    switch(action.type){
        case Set_Product_List:
            return [...action.data.data]
        default:
            return data
    }
}