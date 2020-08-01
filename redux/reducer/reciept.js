import { SET_RECIEPT  } from '../actions/reciept'

const initState = {

    reciept:[]

}

const reciept = (state = initState, action) => {


    switch (action.type) {
  
      case SET_RECIEPT:
        const { key, value } = action.payload
        return { ...state, [key]: value }
      default:
  
        return { ...state }
    }
  };
  
  export default reciept