import React, { Component } from 'react';

import PostIndexItem from './post_index_item';

class PostIndex extends Component {

    constructor(props){
        super(props);
        this.users = this.props.users;
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
            <div className="post-index">
                <ul>
                    {this.props.posts.map(post => 
                    <PostIndexItem 
                    key={post.id} 
                    post={post} 
                    user={that.props.users[post.userId]}
                    deletePost={(post.userId === that.props.currentUser.id) ? that.props.deletePost : null}
                    fetchPost={(post.userId === that.props.currentUser.id) ? that.props.fetchPost : null}
                    openModal={(post.userId === that.props.currentUser.id) ? that.props.openModal : null}
                    />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostIndex;