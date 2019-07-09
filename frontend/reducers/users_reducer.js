import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions'

//import post and comment actions here

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_USERS:
            return action.payload.users;
        //cases for comments and posts
        default:
            return state;
    }
};

export default usersReducer;