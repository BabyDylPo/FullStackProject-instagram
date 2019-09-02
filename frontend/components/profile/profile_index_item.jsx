import React from 'react';

const ProfileIndexItem = ({ post }) => {
    return (
        <li className="profile-index-item">

            <img className="profile-index-item-photo" src={post.photourl} alt={post.id} />
            
        </li>
    )
};

export default ProfileIndexItem;
