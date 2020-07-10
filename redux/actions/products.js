export const FETCH_PRODUCT = "FETCH_PRODUCT"
export const SET_PRODUCTS = "SET_PRODUCTS"

export const productFetch = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});