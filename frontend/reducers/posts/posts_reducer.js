import merge from 'lodash/merge';

import { RECEIVE_POSTS, RECEIVE_POST } from '../../actions/post_actions';

//import post and comment actions here

const postsReducer = (state = {}, action) => {
    
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POSTS:
            return action.payload.posts;
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return merge({}, state, newPost);
        //cases for comments and posts

        default:
            return state;
    }
};

export default postsReducer;