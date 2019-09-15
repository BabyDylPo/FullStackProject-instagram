import React from 'react';
import { Redirect } from "react-router-dom";

const PostIndexItem = ({ post, user, deletePost, updateTargetPost, updateTargetUser, goToProfile, openModal }) => {
    let style = {
        display: 'none',
        backgroundColor: 'white',
        borderRadius: '10%',
    };
    function dropDownMenu() {
        let x = document.getElementById(`drop-down-${post.id}`);
        if (x.style.display === "none") {
            x.style.display = "block";
            if (updateTargetPost !== null) {
                updateTargetPost(post)
            }
        } else {
            x.style.display = "none";
        }
    }
    function updtTrgtUsr() {
        if (updateTargetUser !== null) {
            updateTargetUser(user)
        }
    };


    const awsPhotoUrl = post.awsPhotoUrl.split("?")[0];

    return(
    <li className="post-index-item">
        <div className="post-header">
            <button onClick={() => goToProfile(user)} className="post-user">{user ? user.username : ""}</button>
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

            <img className="post-photo" src={`https://res.cloudinary.com/dssjvvbkx/image/fetch/w_600,c_scale/${awsPhotoUrl}`} alt={post.id} />
        <div className="post-caption">
            <button onClick={updtTrgtUsr} className="username-caption">{user ? user.username : ""}</button>
            <span className="caption-content">
                {post.caption}
            </span>
        </div>
    </li>
    )
};

export default PostIndexItem;

