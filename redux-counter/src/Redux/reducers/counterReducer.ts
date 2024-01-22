import { COUNTER_DECREASE, COUNTER_INCREASE } from "../actions/type";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  counter: 0,
  // posts: [],
  // singlePost: {},
  // isPopUp: false,
};

export function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case COUNTER_INCREASE:
    return {
        ...state,
        counter: state.counter + action.payload
    }
    case COUNTER_DECREASE: 
    return {
      ...state,
      counter: state.counter - action.payload
    }
    default:
      return state;
  }
}

export const getCounter = (state) => state.counter.counter;
