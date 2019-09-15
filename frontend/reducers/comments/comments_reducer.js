import merge from 'lodash/merge';

import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comment_actions';


const commentsReducer = (state = {}, action) => {
    let newState = merge({}, state);

    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_COMMENTS:
            return action.payload.comments;

        case RECEIVE_COMMENT:
            const newComment = { [action.comment.id]: action.comment };
            return merge({}, state, newComment);

        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;

        // case RECEIVE_POST_LIKE: ;

        //     newState[action.like.postId].likerIds.push(action.like.likerId);
        //     return newState;

        // case REMOVE_POST_LIKE:
        //     console.log("REDUCER")
        //     newState[action.like.postId].likerIds =
        //         newState[action.like.postId].likerIds.filter(id => id !== action.like.likerId);
        //     return newState;

        default:
            return state;

    }
};

export default commentsReducer;