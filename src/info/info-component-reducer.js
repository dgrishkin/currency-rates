import { CHANGE_INPUT_VALUE } from "../another-component/action-types";
import { CHANGE_SOME_STR } from "./action-types";

const initialState = {
    title: "Это значение из props",
    someStr: ""
}

export const infoComponent = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SOME_STR:
            return {
                ...state,
                someStr: action.payload
            }
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                someStr: action.payload
            }
        default:
            return state;
    }
}