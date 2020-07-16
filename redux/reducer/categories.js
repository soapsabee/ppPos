import { SET_CATEGORYS , SET_HANDLEINPUT_CATEGORY } from '../actions'

const initState = {

  categories: [],
  handleInputName:""
}

const products = (state = initState, action) => {


  switch (action.type)  {

    case SET_CATEGORYS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUT_CATEGORY:
        return {
            ...state, [action.payload.key]: action.payload.value
        }
    default:

      return { ...state }
  }
};

export default products