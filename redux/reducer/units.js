import { SET_UNITS , SET_HANDLEINPUT_UNIT } from '../actions'

const initState = {

  units:[],
  handleInputName:""
}

const units = (state = initState, action) => {


  switch (action.type)  {

    case SET_UNITS:
      const { key, value } = action.payload
      return { ...state, [key]: value }
    case SET_HANDLEINPUT_UNIT:
        return {
            ...state, [action.payload.key]: action.payload.value
        }
    default:

      return { ...state }
  }
};

export default units