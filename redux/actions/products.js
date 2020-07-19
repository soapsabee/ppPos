export const FETCH_PRODUCT = "FETCH_PRODUCT"
export const SET_PRODUCTS = "SET_PRODUCTS"
export const SET_HANDLEINPUTPRODUCTS = "SET_HANDLEINPUTPRODUCTS"
export const SET_HANDLEINPUT_PRODUCTS = "SET_HANDLEINPUT_PRODUCTS"
export const INSERT_NEW_PRODUCT = "INSERT_NEW_PRODUCT"
export const SET_BARCODE_SCANNER = "SET_BARCODE_SCANNER"

export const dispatchProducts = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});