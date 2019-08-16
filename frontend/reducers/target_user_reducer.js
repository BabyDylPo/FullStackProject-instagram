import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';

//import post and comment actions here

const targetUserReducer = (state = {}, action) => {

    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            const newUser = { user: action.user };
            return merge({}, state, newUser);
        //cases for comments and posts
        default:
            return state;
    }
};

export default targetUserReducer;