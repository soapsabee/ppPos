import {
  SET_PRODUCTS, SET_HANDLEINPUT_PRODUCTS, SET_UPDATE_BASKET_CHECKED,
  SET_DELETE_BASKET_CHECKED, SET_CLEAR_BASKET_PRODUCTS, SET_UPDATE_CASHIER,
  INCREASE_TOTAL_CASHIER, SET_UPDATE_BASKET_CASHIER, SET_DELETE_BASKET_CASHIER,INCREASE_ACCEPT_MONEY,
  BACKSPACE_ACCEPT_MONEY,DECREASE_ACCEPT_MONEY
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
  cashierInputProducts:{
    barcode:"",
    number:0
  },
  basketChecked: [],
  cashierChecked: [],
  errorField: {
    name: false,
    price: false,
    quantity: false,
    cost: false,
    barcode: false
  },
  duplicateAddName: false,
  duplicateBarcode: false,
  startedValid: false,
  hasCameraPermission: null,
  scanned: true,
  searchInput: "",
  sortProducts: "",
  cashier: [],
  validEmptyProduct: false,
  totalCashier: 0,
  totalCost:0,
  acceptMoney: "",
  changeMoney: 0,
  billNumber:"",
  dialogAlertAddProduct: false,


}

const products = (state = initState, action) => {


  switch (action.type) {

    case SET_PRODUCTS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUT_PRODUCTS:
      return {
        ...state, [action.payload.headkey]: {
          ...state[action.payload.headkey],
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
        ...state, cashier:
          [
            ...state.cashier.slice(0, action.payload.value.id),
            ...state.cashier.slice(action.payload.value.id + 1)
          ]
      }

    case SET_CLEAR_BASKET_PRODUCTS:
      return {
        ...state, [action.payload.key]: initState[action.payload.key]
      }
    case INCREASE_TOTAL_CASHIER:
      return {
        ...state, [action.payload.key]: state[action.payload.key] += action.payload.value
      }
    
    case INCREASE_ACCEPT_MONEY:
      return {
        ...state, acceptMoney : state.acceptMoney + action.payload.value
      }
    
    case DECREASE_ACCEPT_MONEY:
      return {
        ...state, acceptMoney : state.acceptMoney.slice(0, -1)
      }

    default:

      return { ...state }
  }
};

export default products