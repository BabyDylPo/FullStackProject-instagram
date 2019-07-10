import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = payload => ({
    type: RECEIVE_POSTS,
    payload,
});

// export const receivePost = ({ post, caption, user_id }) => {
//     
//     return({
//         type: RECEIVE_POST,
//         post,
//         caption,
//         user_id,
//     })
    
// };
export const receivePost = (post) => {
    
    return({
        type: RECEIVE_POST,
        post,
    })
    
};

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