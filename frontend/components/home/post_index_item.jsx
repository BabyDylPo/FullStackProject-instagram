import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, user }) => (
    <li className="post-index-item">
        {/* <Link to={`/posts/${post.id}`}>
            
        </Link> */}
        <div className="post-header">
            {user ? user.username : ""}
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
);

export default PostIndexItem;
