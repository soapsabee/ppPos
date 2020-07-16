export const FETCH_CATEGORYS = "FETCH_CATEGORYS"
export const SET_CATEGORYS = "SET_CATEGORYS"
export const INSERT_NEW_CATEGORY = "INSERT_NEW_CATEGORY"
export const SET_HANDLEINPUTCATEGORY = "SET_HANDLEINPUTCATEGORY"
export const SET_HANDLEINPUT_CATEGORY = "SET_HANDLEINPUT_CATEGORY"

export const dispatchCategories = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});