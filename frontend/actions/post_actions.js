import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts,
});

export const receivePost = ({ post, caption, user_id }) => ({
    type: RECEIVE_POST,
    post,
    caption,
    user_id,
});

//////////////////////////////////////////////////////////////


export const fetchPosts = filters => dispatch => (
    APIUtil.fetchPosts(filters).then(posts => (
        dispatch(receivePosts(posts))
    ))
);

export const fetchPost = id => dispatch => (
    APIUtil.fetchPost(id).then(payload => (
        dispatch(receivePost(payload))
    ))
);

export const createPost = post => dispatch => (
    APIUtil.createPost(post).then(post => (
        dispatch(receivePost(post))
    ))
);