// import { getAllPosts } from './../reducers/postReducer';
import { GET_ALL_POSTS, STORE_ALL_POSTS } from "./type"

export const storeAllPost = (posts) => dispatch => {
    dispatch({
        type: STORE_ALL_POSTS,
        payload: posts
    })
}

// export const getAllPosts = (posts) => dispatch => {
//     dispatch({
//         type: GET_ALL_POSTS,
//         payload: posts
//     })
// }