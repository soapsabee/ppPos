export const FETCH_PRODUCT = "FETCH_PRODUCT"
export const SET_PRODUCTS = "SET_PRODUCTS"
export const SET_HANDLEINPUTPRODUCTS = "SET_HANDLEINPUTPRODUCTS"


export const dispatchProducts = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});