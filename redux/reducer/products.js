import { SET_PRODUCTS, SET_HANDLEINPUT_PRODUCTS, SET_UPDATE_BASKET_CHECKED, SET_DELETE_BASKET_CHECKED, SET_CLEAR_BASKET_CHECKED, SEARCH_PRODUCT, SET_SEARCH_PRODUCT , SET_UPDATE_CASHIER} from '../actions'

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
        ...state, basketChecked: [...state.basketChecked, {

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
        ...state, basketChecked: state.basketChecked.filter(element => element.id !== action.payload.value)
      }
    case SET_CLEAR_BASKET_CHECKED:
      return {
        ...state, basketChecked: initState.basketChecked
      }

    default:

      return { ...state }
  }
};

export default products