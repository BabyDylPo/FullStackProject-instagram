import React from 'react';

const PostIndexItem = ({ post, user, deletePost, fetchPost, openModal }) => {
    let style = {
        display: 'none',
        backgroundColor: 'white',
        borderRadius: '10%',
    };
    function dropDownMenu() {
        let x = document.getElementById(`drop-down-${post.id}`);
        if (x.style.display === "none") {
            x.style.display = "block";
            console.log(fetchPost(post.id))
        } else {
            x.style.display = "none";
        }
    }
    return(
    <li className="post-index-item">
        <div className="post-header">
            <span className="post-user">{user ? user.username : ""}</span>
            <button className="post-options" onClick={dropDownMenu} >
                <img src={window.images.options} alt="options" className="option-image"/>
                <div className="drop-down-menu" style={style} id={`drop-down-${post.id}`}>
                    <ul>
                        <li onClick={(openModal !== null) ? () => openModal('editForm') : null} className="edit-form-link">Edit</li>
                        <li onClick={(deletePost !== null) ? () => deletePost(post.id) : null} className="delete-form">Delete</li>
                    </ul>
                </div>
            </button>
        </div>

        <img className="post-photo" src={post.photourl} alt={post.id} />
        <div className="post-caption">
            <span className="username-caption">
                {user ? user.username : ""}
            </span>
            <span className="caption-content">
                {post.caption}
            </span>
        </div>
    </li>
    )
};

export default PostIndexItem;
