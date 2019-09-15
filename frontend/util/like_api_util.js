export const createPostLike = (postLike) => {
    
    return $.ajax({
        method: "POST",
        url: `api/post_likes`,
        data: { postLike }
    });
};

export const deletePostLike = (postLike) => {
    
    return $.ajax({
        method: "DELETE",
        url: `api/post_likes/${postLike.postId}`
    });
};
