import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, user, deletePost, openModal }) => {
    let style = {
        display: 'none',
        backgroundColor: 'white',
        borderRadius: '10%',
    };
    function myFunction() {
        let x = document.getElementById(`drop-down-${post.id}`);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return(
    <li className="post-index-item">
        {/* <Link to={`/posts/${post.id}`}>
            
        </Link> */}
        <div className="post-header">
            <span className="post-user">{user ? user.username : ""}</span>
            <button className="post-options" onClick={myFunction} >
                <img src={window.images.options} alt="options" className="option-image"/>
                <div className="drop-down-menu" style={style} id={`drop-down-${post.id}`}>
                    <ul>
                        <li onClick={(openModal !== null) ? () => openModal('postForm') : null} className="edit-form-link">Edit</li>
                        <li onClick={(deletePost !== null) ? () => deletePost(post.id) : null} className="delete-form">Delete</li>
                    </ul>
                    {/* <button onClick={() => openModal('postForm')} className="edit-form-link" /> */}
                    {/* <button onClick={(deletePost !== null) ? () => deletePost(post.id) : null} className="delete-form" /> */}
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
