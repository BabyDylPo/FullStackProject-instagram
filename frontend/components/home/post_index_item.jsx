import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
    <li className="post-index-item">
        <Link to={`/posts/${post.id}`}>
            <span>{post.id}</span>
            <img src={post.image_url} alt={post.id} />
            <span>{post.caption}</span>
        </Link>
    </li>
);

export default PostIndexItem;
