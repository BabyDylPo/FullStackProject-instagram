import merge from 'lodash/merge';

import { RECEIVE_POST } from '../../actions/post_actions';

//import post and comment actions here

const targetPostReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST:
            const newPost = { post: action.post };
            return merge({}, state, newPost);
        //cases for comments and posts
        default:
            return state;
    }
};

export default targetPostReducer;