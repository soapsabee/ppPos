import { SET_PRODUCTS, SET_HANDLEINPUTPRODUCTS } from '../actions'

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
    status: ""
  }
}

const products = (state = initState, action) => {


  switch (action.type) {

    case SET_PRODUCTS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUTPRODUCTS:      
      return {
        ...state, handleInputProducts: {
          ...state.handleInputProducts,
          [key]: value
        }
      }
    default:

      return { ...state }
  }
};

export default products