import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_POST_LIKE = "RECEIVE_POST_LIKE";
export const REMOVE_POST_LIKE = "REMOVE_POST_LIKE";

const receiveLike = (like) => {
    return {
        type: RECEIVE_POST_LIKE,
        like
    };
};

const removeLike = (like) => {
    return {
        type: REMOVE_POST_LIKE,
        like
    };
};

export const createPostLike = (like) => (dispatch) => {
    
    return LikeApiUtil.createPostLike(like).
        then((like) => {
            return dispatch(receiveLike(like));
        });
};

export const deletePostLike = (like) => (dispatch) => {
   
    
    return LikeApiUtil.deletePostLike(like).
        then(() => {
            return dispatch(removeLike(like));
        });
};