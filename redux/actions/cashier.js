
export const SET_CASHIER = "SET_CASHIER"
export const SET_DELETE_BASKET_CASHIER = "SET_DELETE_BASKET_CASHIER"
export const SET_CLEAR_BASKET_CASHIER = "SET_CLEAR_BASKET_CASHIER"

export const UPDATE_CHECKED_CASHIER = "UPDATE_CHECKED_CASHIER"
export const DELETE_CHECKED_CASHIER = "DELETE_CHECKED_CASHIER"
export const CLEAR_BASKET_CASHIER = "CLEAR_BASKET_CASHIER"




export const dispatchCashier = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});