export const FETCH_CATEGORYS = "FETCH_CATEGORYS"
export const SET_CATEGORYS = "SET_CATEGORYS"
export const INSERT_NEW_CATEGORY = "INSERT_NEW_CATEGORY"
export const SET_HANDLEINPUTCATEGORY = "SET_HANDLEINPUTCATEGORY"
export const SET_HANDLEINPUT_CATEGORY = "SET_HANDLEINPUT_CATEGORY"
export const FETCH_CATEGORIES_MERGE_UNITS = "FETCH_CATEGORIES_MERGE_UNITS"
export const SET_UPDATE_BASKET_CHECKED_CATEGORY = "SET_UPDATE_BASKET_CHECKED_CATEGORY"
export const SET_CLEAR_BASKET_CHECKED_CATEGORY = "SET_CLEAR_BASKET_CHECKED_CATEGORY"
export const SET_DELETE_BASKET_CHECKED_CATEGORY = "SET_DELETE_BASKET_CHECKED_CATEGORY"
export const UPDATE_BASKET_CHECKED_CATEGORY = "UPDATE_BASKET_CHECKED_CATEGORY"
export const CLEAR_BASKET_CHECKED_CATEGORY = "CLEAR_BASKET_CHECKED_CATEGORY"
export const DELETE_BASKET_CHECKED_CATEGORY = "DELETE_BASKET_CHECKED_CATEGORY"
export const DELETE_CATEGORY = "DELETE_CATEGORY"
export const SEARCH_CATEGORY = "SEARCH_CATEGORY"
export const SET_SEARCH_CATEGORY = "SET_SEARCH_CATEGORY"

export const dispatchCategories = (type,obj) => ({
    type: type,payload:obj.value,key:obj.key
});