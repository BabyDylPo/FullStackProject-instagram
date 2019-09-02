import React, { Component } from 'react';

import ProfileIndexItem from './profile_index_item';

class ProfileIndex extends Component {

    constructor(props) {
        super(props);
        this.columnZero = [];
        this.columnOne = []; 
        this.columnTwo = [];
        this.posts = [];
        this.testPosts = [];
        this.users = this.props.users;
        this.user = this.props.targetUser.user;
        
    }
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers();
        this.posts = this.props.posts.filter(post => post.userId === this.user.id )
        for (let i = 0; i < this.posts.length; i++) {
            if (i % 3 === 0) {
                this.columnZero.push(this.posts[i])
            } else if (i % 3 === 1) {
                this.columnOne.push(this.posts[i])
            } else if (i % 3 === 2) {
                this.columnTwo.push(this.posts[i])
            } else {
                alert("error in profile index");
            }
        }
        this.testPosts.push(this.posts[0]);
        this.testPosts.push(this.posts[1]);
        this.testPosts.push(this.posts[2]);
    }
    componentDidUpdate(prevProps) {
        if (this.props.targetPost.post !== undefined && prevProps.targetPost.post !== undefined) {
            if (this.props.targetPost.post.caption !== prevProps.targetPost.post.caption) {
                this.props.fetchPosts();
            }
        }
    }
    render() {
        let that = this;
        return (
            <div className="profile-index-box">
                <article className="profile-index-article">
                    <div className="profile-index-outer-container">
                        <div className="profile-index-container">
                            <ul className="profile-index-row">
                                {this.testPosts.map(post => {
                                    if(this.user !== undefined) {
                                        
                                        if (post.userId === this.user.id) {
                                            return (
                                                <div className="profile-index-item-container">
                                                    <ProfileIndexItem
                                                        key={post.id}
                                                        post={post}
                                                        user={this.user}
                                                        deletePost={(post.userId === this.user.id) ? that.props.deletePost : null}
                                                        fetchPost={(post.userId === this.user.id) ? that.props.fetchPost : null}
                                                        openModal={(post.userId === this.user.id) ? that.props.openModal : null}
                                                    />
                                                </div>
                                            )
                                        }
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default ProfileIndex;