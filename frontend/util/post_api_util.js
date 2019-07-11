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

export const updatePost = post => (
    $.ajax({
        url: `api/posts/${post.id}`,
        method: 'PATCH',
        data: { post }
    })
);


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