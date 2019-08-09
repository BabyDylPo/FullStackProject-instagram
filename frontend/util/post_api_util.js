export const fetchPosts = data => (
    $.ajax({
        method: 'GET',
        url: 'api/posts',
        data
    })
);

export const fetchPost = id => (
    $.ajax({
        method: 'GET',
        url: `api/posts/${id}`
    })
);

export const createPost = postForm => (
    $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: postForm,
        contentType: false,
        processData: false
    })
);

export const updatePost = (post, id) => {
    return $.ajax({
        url: `api/posts/${id}`,
        method: 'PATCH',
        data: post,
        contentType: false,
        processData: false
    })
}


export const deletePost = id => (
    $.ajax({
        url: `api/posts/${id}`,
        method: 'DELETE'
    })
);

export const fetchAllUsers = data => (
    $.ajax({
        method: 'GET',
        url: 'api/users',
        data
    })
);