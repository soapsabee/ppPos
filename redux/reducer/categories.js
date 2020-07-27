import { SET_CATEGORYS, SET_HANDLEINPUT_CATEGORY , SET_UPDATE_BASKET_CHECKED_CATEGORY , SET_DELETE_BASKET_CHECKED_CATEGORY , SET_CLEAR_BASKET_CHECKED_CATEGORY} from '../actions'

const initState = {

  categories: [],
  handleInputName: "",
  basketChecked: [],
  searchInput:"",
}

const categories = (state = initState, action) => {


  switch (action.type) {

    case SET_CATEGORYS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUT_CATEGORY:
      return {
        ...state, [action.payload.key]: action.payload.value
      }
    case SET_UPDATE_BASKET_CHECKED_CATEGORY:
      return {
        ...state, basketChecked: [...state.basketChecked, {

          categoryID: action.payload.value
        }]
      }
    case SET_DELETE_BASKET_CHECKED_CATEGORY:

      return {
        ...state, basketChecked: state.basketChecked.filter(element => element.categoryID !== action.payload.value)
      }
    case SET_CLEAR_BASKET_CHECKED_CATEGORY:
      return {
        ...state, basketChecked: initState.basketChecked
      }
    default:

      return { ...state }
  }
};

export default categories