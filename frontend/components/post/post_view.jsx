import React from "react";
// import { timeSince } from "../../util/date_util";
// import PostCaption from "../posts/post_caption";
// import PostCaptionEdit from "../posts/post_caption_edit";
import CommentContainer from "../comment/comment_container";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { deletePost } from "../../actions/post_actions";
import { asArray } from '../../reducers/selectors';
import {
    createPostLike,
    deletePostLike
} from "../../actions/like_actions";
import {
    createComment,
    deleteComment
} from "../../actions/comment_actions";

class PostView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            commenter_id: this.props.currentUser.id,
            postId: this.props.postId,
            likeHeart: "like-heart-none",
            comments: this.props.comments,
        };

        this.doubleClick = this.doubleClick.bind(this);
        this.escToClose = this.escToClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.likePost = this.likePost.bind(this);
        this.unlikePost = this.unlikePost.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.escToClose);
        this.props.fetchComments();
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escToClose);
    }

    doubleClick() {
        const {
            currentUser,
            post
        } = this.props;

        if (post.likerIds.includes(currentUser.id)) {
            return this.unlikePost();
        } else {
            return this.likePost();
        }
    }

    escToClose(e) {
        const { closeModal } = this.props;

        if (e.keyCode === 27) {
            closeModal();
        }
    }

    handleDelete() {
        const {
            closeModal,
            deletePost,
            post
        } = this.props;

        deletePost(post.id).then(closeModal());
    }

    handleSubmit(e) {
        e.preventDefault();

        const {
            post
        } = this.props;
        this.setState({
            body: ""
        });

        const form = document.getElementById(`comment-form-${post.id}`);
        const formData = new FormData();
        formData.append('comment[body]', this.state.body);
        formData.append('comment[post_id]', this.state.postId);

        this.props.createComment(formData);
        form.reset();
    }

    likePost() {

        const {
            createPostLike,
            currentUser,
            post
        } = this.props;
        createPostLike({
            postId: post.id,
            likerId: currentUser.id
        });

        this.setState({
            likeHeart: "like-heart-display"
        });

        setTimeout(() => {
            this.setState({
                likeHeart: "like-heart-none"
            });
        }, 1200);
    }

    unlikePost() {
        
        const {
            currentUser,
            deletePostLike,
            post
        } = this.props;

        deletePostLike({
            postId: post.id,
            likerId: currentUser.id
        });
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            });
        };
    }

    render() {
        const {
            closeModal,
            currentUser,
            post,
            comments,
            user
        } = this.props;


        // const createdAt = timeSince(post.created_at);

        let postCaption;
        // if (captionEditting === post.id) {
        //     postCaption = <PostCaptionEdit post={post} />
        // } else {
        //     postCaption = <PostCaption post={post} user={user} />
        // }

        const postHeader = <>
            <img onClick={() => closeModal()} className="post-view-profile-pic" src={user.photourl} />
            <div onClick={() => closeModal()} className="post-view-user">
                {user.username}
            </div>
        </>
        let deleteButton;
        if (post.posterId === currentUser.id) {
            deleteButton = <button className="view-delete-icon" onClick={this.handleDelete}>
                <img src={window.delete_icon} /> 
                <span>DELETE</span>
            </button>
        }
        let likeCount = post.likerIds.length;
        let likeOrLikes = likeCount === 1 ? "like" : "likes";
        if (likeCount === 0) {
            likeOrLikes = null;
            likeCount = <span>
                Be the first to <span onClick={this.likePost} className="like-this">like this</span>
            </span>;
        }

        let heartIcon;
        if (post.likerIds.includes(currentUser.id)) {
            heartIcon = <img onClick={this.unlikePost} className="liked-icon" src={window.images.liked_icon} />
        } else {
            heartIcon = <img onClick={this.likePost} className="heart-icon" src={window.images.heart_icon} />
        };
        const postComments = comments.filter(comment => post.id === comment.postId);
        const commentsList = postComments.map((comment, idx) => {
            return <CommentContainer key={idx} commentId={comment.id} />
        })

        

        return (
            <>
                <article className="post-view-container">
                    <section className="photo-side">
                        <div className="photo-space">
                            <img className={this.state.likeHeart} src={window.images.like_heart_icon} />
                            <img onDoubleClick={this.doubleClick} src={post.photourl} />
                        </div>
                    </section>

                    <section className="post-view-right">
                        <header className="post-view-header">
                            {postHeader}
                        </header>

                        <div className="post-view-below-header">
                            <div className="post-view-space">
                                {post.caption}

                                <ul className="post-view-comments-list">
                                    {commentsList}
                                </ul>
                            </div>

                            <div>
                                <section className="post-view-icon-container">
                                    <span>
                                        {heartIcon}
                                    </span>

                                    <span>
                                        <label className="post-view-comment-icon" htmlFor={`view-comment-${post.userId}`} >
                                            <img src={window.images.comment_icon} />
                                        </label>
                                    </span>

                                    <span>
                                        {deleteButton}
                                    </span>
                                </section>

                                <section className="post-likes">{likeCount} {likeOrLikes}</section>
                            </div>
                        </div>

                        <div className="post-view-time">
                            {/* {createdAt} */}
                        </div>

                        <section className="post-view-comment-form-container">
                            <div>
                                <form onSubmit={this.handleSubmit} className="post-view-comment-form" id={`comment-form-${post.id}`}>
                                    <input onChange={this.update("body")} id={`view-comment-${post.posterId}`} placeholder="Add a comment..." />

                                    <button className="submit-comment-icon" onClick={this.handleSubmit} disabled={!post.caption}>
                                        <img src={window.submit_icon} />
                                    </button>
                                </form>
                            </div>
                        </section>
                    </section>
                </article>
            </>
        )
    }
}

import { fetchComments } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[ownProps.postId],
        comments: asArray(state.entities.comments),
        user: state.entities.users[ownProps.userId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createComment: (comment) => dispatch(createComment(comment)),
        fetchComments: () => dispatch(fetchComments()),
        createPostLike: (like) => dispatch(createPostLike(like)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        deletePostLike: (like) => dispatch(deletePostLike(like)),
        deletePost: (postId) => dispatch(deletePost(postId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);