export const SET_HANDLEINPUTUNIT = "SET_HANDLEINPUTUNIT"
export const SET_HANDLEINPUT_UNIT = "SET_HANDLEINPUT_UNIT"
export const FETCH_UNITS = "FETCH_UNITS"
export const SET_UNITS = "SET_UNITS"
export const INSERT_NEW_UNIT = "INSERT_NEW_UNIT"

export const dispatchUnits = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});