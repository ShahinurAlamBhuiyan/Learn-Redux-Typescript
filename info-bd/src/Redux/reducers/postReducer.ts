import { CHANGE_POP_UP, STORE_ALL_POSTS, STORE_SINGLE_POST } from "../actions/type";

/* eslint-disable @typescript-eslint/no-explicit-any */
const initialState = {
  posts: [],
  singlePost: {},
  isPopUp: false,
};

export const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case STORE_ALL_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case STORE_SINGLE_POST:
      return {
        ...state,
        singlePost: action.payload,
      };

    case CHANGE_POP_UP:
        return {
            ...state,
            isPopUp: action.payload,
        }
    default:
      return state;
  }
};

export const getAllPosts = (rootState) => rootState.posts.posts;
export const getSinglePost = (rootState) => rootState.posts.singlePost;
export const getPopUpStatus = (rootState) => rootState.posts.isPopUp;