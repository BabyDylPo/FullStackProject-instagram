import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
    <li className="post-index-item">
        {/* <Link to={`/posts/${post.id}`}>
            
        </Link> */}
        <span>{post.id}</span>
        <img className="post-photo" src={post.photourl} alt={post.id} />
        <span className="post-caption">{post.caption}</span>
    </li>
);

export default PostIndexItem;
