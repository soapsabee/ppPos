import {
  SET_PRODUCTS, SET_HANDLEINPUT_PRODUCTS, SET_UPDATE_BASKET_CHECKED,
  SET_DELETE_BASKET_CHECKED, SET_CLEAR_BASKET_PRODUCTS, SET_UPDATE_CASHIER,
  INCREASE_TOTAL_CASHIER, SET_UPDATE_BASKET_CASHIER , SET_DELETE_BASKET_CASHIER
} from '../actions'

const initState = {

  products: [],
  handleInputProducts: {
    name: "",
    price: "",
    quantity: "",
    cost: "",
    unitID: "",
    barcode: "",
    detail: "",
    imageURI: "",
    categoryID: "",
    status: 1
  },
  basketChecked: [],
  cashierChecked: [],
  hasCameraPermission: null,
  scanned: true,
  searchInput: "",
  sortProducts: "",
  cashier: [],
  validEmptyProduct: false,
  totalCashier: 0,
  acceptMoney: 0,

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
        ...state, [action.payload.key]: [...state[action.payload.key], {

          id: action.payload.value
        }]
      }

    case SET_UPDATE_CASHIER:
      return {
        ...state, [action.payload.key]: [...state[action.payload.key],

        ...action.payload.value
        ]
      }
    case SET_DELETE_BASKET_CHECKED:

      return {
        ...state, [action.payload.key]: state[action.payload.key].filter(element => element.id !== action.payload.value)
      }
    case SET_DELETE_BASKET_CASHIER:
      return {
        ...state,cashier:
        [
          ...state.cashier.slice(0,action.payload.value.id),
          ...state.cashier.slice(action.payload.value.id + 1)
        ]
      }
 
    case SET_CLEAR_BASKET_PRODUCTS:
      return {
        ...state, [action.payload.key]: initState[action.payload.key]
      }
    case INCREASE_TOTAL_CASHIER:
      return {
        ...state, totalCashier: state.totalCashier += action.payload.value
      }

    default:

      return { ...state }
  }
};

export default products