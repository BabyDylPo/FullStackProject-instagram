import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = payload => ({
    type: RECEIVE_POSTS,
    payload,
});
const receivePost = (post) => {
    
    return({
        type: RECEIVE_POST,
        post,
    })
    
};
const removePost = postId => ({
    type: REMOVE_POST,
    postId
});
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
export const fetchPosts = posts => dispatch => (
    APIUtil.fetchPosts(posts).then(posts => (
        dispatch(receivePosts(posts))
    ))
);
export const fetchPost = id => dispatch => (
    APIUtil.fetchPost(id).then(payload => (
        dispatch(receivePost(payload))
    ))
);
export const createPost = post => dispatch => {
    
    return(
        APIUtil.createPost(post).then(post => (
            dispatch(receivePost(post))
        ))
    )
    
};
export const updatePost = (post, id) => dispatch => {
    return(
        APIUtil.updatePost(post, id).then(post => (
            dispatch(receivePost(post))
        ))
    )
    
};
export const deletePost = postId => dispatch => {
    return(
        APIUtil.deletePost(postId).then(post => dispatch(removePost(postId)))
    )

};
