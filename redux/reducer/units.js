import { SET_UNITS, SET_HANDLEINPUT_UNIT, SET_UPDATE_BASKET_CHECKED_UNITS, SET_DELETE_BASKET_CHECKED_UNITS, SET_CLEAR_BASKET_CHECKED_UNITS } from '../actions'

const initState = {

  units: [],
  handleInputName: "",
  basketChecked: []
}

const units = (state = initState, action) => {


  switch (action.type) {

    case SET_UNITS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUT_UNIT:
      return {
        ...state, [action.payload.key]: action.payload.value
      }
    case SET_UPDATE_BASKET_CHECKED_UNITS:
      return {
        ...state, basketChecked: [...state.basketChecked, {

          unitID: action.payload.value
        }]
      }
    case SET_DELETE_BASKET_CHECKED_UNITS:

      return {
        ...state, basketChecked: state.basketChecked.filter(element => element.unitID !== action.payload.value)
      }
    case SET_CLEAR_BASKET_CHECKED_UNITS:
      return {
        ...state, basketChecked: initState.basketChecked
      }
    default:

      return { ...state }
  }
};

export default units