export const SET_RECIEPT = "SET_RECIEPT"
export const FETCH_RECIEPT = "FETCH_RECIEPT"
export const INSERT_RECIEPT = "INSERT_RECIEPT"

export const dispatchReciept = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});