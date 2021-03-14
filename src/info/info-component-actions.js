import { CHANGE_SOME_STR } from "./action-types"

export const changeSomeStr = (someStr) => {
    return {
        type: CHANGE_SOME_STR,
        payload: someStr
    }
}