import { SET_PRODUCTS } from '../actions'

const initState = {

  products:[]
}

const products = (state = initState, action) => {
  
  
  switch (action.type) {

    case SET_PRODUCTS:
        const { key,value } = action.payload
        return { ...state, [key]:value }
    default:

      return { ...state }
  }
};

export default products