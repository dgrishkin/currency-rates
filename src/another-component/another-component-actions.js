import { CHANGE_INPUT_VALUE } from './action-types'

export const changeInputValue = (inputValue) => {
    return {
        type: CHANGE_INPUT_VALUE,
        payload: inputValue //=1
    }
}