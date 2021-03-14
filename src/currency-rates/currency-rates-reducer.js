import { LOAD_CURRENCY_RATES } from "./action-types"

const initialState = {
    rates: []
}

export const currencyRates = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CURRENCY_RATES:
            return {
                ...state,
                rates: action.payload
            }
        default:
            return state;
    }
}