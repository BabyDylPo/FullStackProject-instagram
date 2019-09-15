import React from 'react';
import { Link } from 'react-router-dom';
import UserProfileItem from './user_profile_item';
import GreetingContainer from '../home/greeting_container';
import { fetchComments } from '../../actions/comment_actions';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadShow: 'hide-upload'
        };

    }

    componentDidMount() {
        window.scrollTo(0, 0); //hmmmmm.. fancy

        const {
            fetchPosts,
            fetchComments,
            fetchUser
        } = this.props;

        fetchPosts();
        fetchComments();

        if (this.props.match.params.userId) {
            fetchUser(this.props.match.params.userId);
        }
    }

    render() {
        const {
            currentUser,
            logout,
            posts,
            user 
        } = this.props;

        const { uploadShow } = this.state;

        const thisUser = user ? user : currentUser;

        const myPosts = posts.filter(post => post.userId === thisUser.id);
        let postsList = myPosts.map( (post, idx) => {
            return <UserProfileItem post={post}
                                    key={idx}
                                    thisUser={thisUser} />
        });

        postsList = postsList.length === 0 ? <article className="filler-post-list" /> : postsList;

        const postCount = myPosts.length;
        const postOrPosts = postCount === 1 ? "post" : "posts";

        let logoutButton = <button className="logout-button" onClick={logout}>Logout</button>;
        
        if (thisUser !== currentUser) {
            logoutButton = null;
        } 

        let profilePic = <Link to={"profile/edit"}>
                            <img src={thisUser.photourl} />
                         </Link>
        if (thisUser !== currentUser) {
            profilePic = <img src={thisUser.photourl} />
        }

        return (
            <>
            <GreetingContainer />
            <main className="user-profile-container">
                <div className="user-profile">
                    <header className="user-profile-info">
                        <div className="profile-pic">
                            {profilePic}
                        </div>

                        <section className="profile-info">
                            <div className="username-cog">
                                <h1>
                                    {thisUser.username}
                                </h1>

                                <div>
                                    {logoutButton}
                                </div>
                            </div>

                            <div>
                                <ul className="user-post-follow-list">
                                    <li>{postCount} {postOrPosts}</li>
                                </ul>

                                <div>
                                    <h1 className="display-name">
                                        {thisUser.displayName}
                                    </h1>

                                    <div className="profile-bio">
                                        <span>
                                            {thisUser.bio}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </header>

                    <ul className="user-posts">
                        {postsList}
                    </ul>
                </div>
            </main>
            </>
        )

    }

}

export default UserProfile;