import merge from 'lodash/merge';

import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST } from '../../actions/post_actions';
import { RECEIVE_POST_LIKE, REMOVE_POST_LIKE } from '../../actions/like_actions';

//import post and comment actions here

const postsReducer = (state = {}, action) => {
    let newState = merge({}, state);
    
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_POSTS:
            return action.payload.posts;

        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge({}, state, newPost);

        case REMOVE_POST:
            delete newState[action.postId];
            return newState;

        case RECEIVE_POST_LIKE:;
            
            newState[action.like.postId].likerIds.push(action.like.likerId);
            return newState;

        case REMOVE_POST_LIKE:
            newState[action.like.postId].likerIds =
            newState[action.like.postId].likerIds.filter(id => id !== action.like.likerId);
            return newState;

        default:
            return state;

    }
};

export default postsReducer;