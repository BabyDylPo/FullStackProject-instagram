import * as APIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => {

    return ({
        type: RECEIVE_USER,
        user,
    })

};

export const receiveAllUsers = payload => ({
    type: RECEIVE_ALL_USERS,
    payload,
})

export const fetchAllUsers = users => dispatch => (
    APIUtil.fetchAllUsers(users).then(users => (
        dispatch(receiveAllUsers(users))
    ))
);
export const fetchUser = id => dispatch => (
    APIUtil.fetchUser(id).then(payload => (
        dispatch(receiveUser(payload))
    ))
);

