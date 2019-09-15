export const fetchComments = data => (
    $.ajax({
        method: 'GET',
        url: 'api/comments',
        data
    })
);

export const fetchComment = id => (
    $.ajax({
        method: 'GET',
        url: `api/comments/${id}`
    })
);

export const createComment = commentForm => (
    $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: commentForm,
        contentType: false,
        processData: false
    })
);

export const updateComment = (comment, id) => {
    return $.ajax({
        url: `api/comments/${id}`,
        method: 'PATCH',
        data: comment,
        contentType: false,
        processData: false
    })
}


export const deleteComment = id => (
    $.ajax({
        url: `api/comments/${id}`,
        method: 'DELETE'
    })
);