import React, { Component } from 'react';

import ProfileIndexItem from './profile_index_item';

class ProfileIndex extends Component {

    constructor(props) {
        super(props);
        this.users = this.props.users;
        this.user = this.props.targetUser.user;
        console.log(this.props.targetUser);
    }
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers();
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
            <div className="profile-index">
                <ul>
                    {this.props.posts.map(post => {
                        if(this.user !== undefined) {
                            
                            if (post.userId === this.user.id) {
                                return (
                                    <ProfileIndexItem
                                        key={post.id}
                                        post={post}
                                        user={this.user}
                                        deletePost={(post.userId === this.user.id) ? that.props.deletePost : null}
                                        fetchPost={(post.userId === this.user.id) ? that.props.fetchPost : null}
                                        openModal={(post.userId === this.user.id) ? that.props.openModal : null}
                                    />
                                )
                            }
                        }
                    }
                    )}
                </ul>
            </div>
        );
    }
}

export default ProfileIndex;