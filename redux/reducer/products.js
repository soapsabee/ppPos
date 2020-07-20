import { SET_PRODUCTS, SET_HANDLEINPUT_PRODUCTS, SET_UPDATE_BASKET_CHECKED , SET_DELETE_BASKET_CHECKED } from '../actions'

const initState = {

  products: [],
  handleInputProducts: {
    name: "",
    price: "",
    quantity: "",
    cost: "",
    unit: "",
    barcode: "",
    detail: "",
    imageURI: "",
    categoryID: "",
    status: 1
  },
  basketChecked: [],
  hasCameraPermission: null,
  scanned: false

}

const products = (state = initState, action) => {


  switch (action.type) {

    case SET_PRODUCTS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUT_PRODUCTS:
      return {
        ...state, handleInputProducts: {
          ...state.handleInputProducts,
          [action.payload.key]: action.payload.value
        }
      }
    case SET_UPDATE_BASKET_CHECKED:
      return {
        ...state, basketChecked: [...state.basketChecked, {

          id: action.payload.value
        }]
      }
    case SET_DELETE_BASKET_CHECKED:

      return {
        ...state, basketChecked: state.basketChecked.filter(element => element.id !== action.payload.value)
      }
      
    default:

      return { ...state }
  }
};

export default products