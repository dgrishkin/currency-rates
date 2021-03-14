import { CHANGE_INPUT_VALUE } from './action-types'

const initialState = {
    someProp: "!!!",
    inputValue: ""
}

export const anotherComponent = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload//=1
            }
        default:
            return state;
    }
}