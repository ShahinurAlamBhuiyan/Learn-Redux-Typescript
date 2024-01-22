import { CHANGE_POP_UP, STORE_ALL_POSTS, STORE_SINGLE_POST } from "./type"

export const storeAllPost = (posts) => dispatch => {
    dispatch({
        type: STORE_ALL_POSTS,
        payload: posts
    })
}

export const storeSinglePost = (post) => dispatch => {
    // console.log(post, 'post')
    dispatch({
        type: STORE_SINGLE_POST,
        payload: post
    })
}

export const changePopUp = (changedStatus) => dispatch => {
    dispatch({
        type: CHANGE_POP_UP,
        payload: changedStatus
    })
}