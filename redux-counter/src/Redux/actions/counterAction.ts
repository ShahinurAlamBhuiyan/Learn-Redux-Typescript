import { COUNTER_DECREASE, COUNTER_INCREASE } from "./type"

export const increase = (count) => dispatch => {
    // console.log(count, 'count')
    dispatch({
        type: COUNTER_INCREASE,
        payload: count
    })
}

export const decrease = (count) => dispatch => {
    dispatch({
        type: COUNTER_DECREASE,
        payload: count
    })
}