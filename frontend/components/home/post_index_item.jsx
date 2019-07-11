import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, user, deletePost }) => {
    let that = this;
    return(
    <li className="post-index-item">
        {/* <Link to={`/posts/${post.id}`}>
            
        </Link> */}
        <div className="post-header">
            <span className="post-user">{user ? user.username : ""}</span>
            <button className="post-options" onClick={ (deletePost!==null) ? () => deletePost(post.id) : null}>
                <img src={window.images.options} alt="options" className="option-image"/>
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
