import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';;

class PostIndex extends Component {

    constructor(props){
        super(props);
        this.users = this.props.users;
        this.updateTargetPost = this.updateTargetPost.bind(this)
        this.updateTargetUser = this.updateTargetUser.bind(this)
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
    updateTargetPost(post){
        this.setState({targetPost: this.props.fetchPost(post.id)})
    }

    updateTargetUser(user){
        this.setState({targetUser: this.props.fetchUser(user.id)})
        this.props.fetchUser(user.id).then(() => window.location = "/#/profile") // lol
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
                    openModal={(post.userId === that.props.currentUser.id) ? that.props.openModal : null}
                    updateTargetPost={(post.userId === that.props.currentUser.id) ? that.updateTargetPost : null}
                    updateTargetUser={that.updateTargetUser}
                    />
                    )}
                </ul>
            </div>
        );
    }
}

export default PostIndex;