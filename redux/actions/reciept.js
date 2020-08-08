
export const SET_RECIEPT = "SET_RECIEPT"
export const FETCH_RECIEPT = "FETCH_RECIEPT"
export const INSERT_RECIEPT = "INSERT_RECIEPT"
export const SET_RECIEPT_BYKEY = "SET_RECIEPT_BYKEY"
export const SORT_RECIEPT = "SORT_RECIEPT"
export const RECIEPT_SALE_TODAY = "RECIEPT_SALE_TODAY"

export const dispatchReciept = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});