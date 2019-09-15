import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComments = payload => ({
    type: RECEIVE_COMMENTS,
    payload,
});
const receiveComment = (comment) => {

    return ({
        type: RECEIVE_COMMENT,
        comment,
    })

};
const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
export const fetchComments = comments => dispatch => (
    APIUtil.fetchComments(comments).then(comments => (
        dispatch(receiveComments(comments))
    ))
);
export const fetchComment = id => dispatch => (
    APIUtil.fetchComment(id).then(payload => (
        dispatch(receiveComment(payload))
    ))
);
export const createComment = comment => dispatch => {

    return (
        APIUtil.createComment(comment).then(comment => (
            dispatch(receiveComment(comment))
        ))
    )

};
export const updateComment = (comment, id) => dispatch => {
    return (
        APIUtil.updateComment(comment, id).then(comment => (
            dispatch(receiveComment(comment))
        ))
    )

};
export const deleteComment = commentId => dispatch => {
    return (
        APIUtil.deleteComment(commentId).then(comment => dispatch(removeComment(commentId)))
    )

};
