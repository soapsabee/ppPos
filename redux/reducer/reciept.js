import { SET_RECIEPT  } from '../actions/reciept'
import moment from 'moment';

const initState = {

    reciept:[],
    datePickerShow: false,
    date: new Date(),
    totalBalance:0,
    totalProfit:0,
    totalBalanceNow:0,
    totalProfitNow:0

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