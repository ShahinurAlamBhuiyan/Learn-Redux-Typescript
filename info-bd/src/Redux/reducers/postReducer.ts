import { STORE_ALL_POSTS } from "../actions/type";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  posts: [],
  singlePost: {},
  isPopUp: false,
  shahin: 'hello'
};

export const postReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case STORE_ALL_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    default:
      return state;
  }
};

export const getAllPosts = (state) => state.posts;



