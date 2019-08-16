import React from 'react';

const ProfileIndexItem = ({ post, user, deletePost, fetchPost, openModal }) => {
    let style = {
        display: 'none',
        backgroundColor: 'white',
        borderRadius: '10%',
    };
    function dropDownMenu() {
        let x = document.getElementById(`drop-down-${post.id}`);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <li className="profile-index-item">

            <img className="profile-photo" src={post.photourl} alt={post.id} />
            
        </li>
    )
};

export default ProfileIndexItem;
