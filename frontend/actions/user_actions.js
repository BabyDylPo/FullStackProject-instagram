import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const receiveAllUsers = payload => ({
    type: RECEIVE_ALL_USERS,
    payload,
})

export const fetchAllUsers = users => dispatch => (
    APIUtil.fetchAllUsers(users).then(users => (
        dispatch(receiveAllUsers(users))
    ))
);