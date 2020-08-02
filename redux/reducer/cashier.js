import { SET_CASHIER , SET_UPDATE_BASKET_CASHIER  , SET_CLEAR_BASKET_CASHIER } from '../actions'

const initState = {
    cashier: [],
    hasCameraPermission: null,
    scanned: false,
    basketChecked: [],
    validEmptyProduct: false
}

const cashier = (state = initState, action) => {

    switch (action.type) {

        case SET_CASHIER:
            console.log("SET_CAShIER");
            return { ...state, [action.payload.key]: action.payload.value }

        case SET_UPDATE_BASKET_CASHIER:
            console.log("UPDATE ACTION :",...action.payload.value);
            // return { ...state }
            return {
                ...state, [action.payload.key]: [...state[action.payload.key], 

                    ...action.payload.value
                ]
            }

        case SET_CLEAR_BASKET_CASHIER:
            return {
                ...state, [action.payload.key]: initState.action.payload.value
            }

        default:

            return { ...state }
    }

}

export default cashier
