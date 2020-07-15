import { SET_PRODUCTS, SET_HANDLEINPUT_PRODUCTS } from '../actions'

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
    categoryID: "",
    status: 1
  },
  
}

const products = (state = initState, action) => {


  switch (action.type)  {

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
    default:

      return { ...state }
  }
};

export default products