import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deleteClass: "hide-delete",
            username: "NOT WORKING"
        };

        this.deleteOrNot = this.deleteOrNot.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.getUsername = this.getUsername.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.getUsername();
    }

    getUsername() {
        const { comment } = this.props;
        const username = this.props.users.filter( user => user.id === comment.userId)[0].username
        this.setState({
            username: username
        });
    }

    deleteOrNot() {
        const {
            currentUser,
            comment
        } = this.props;

        if (currentUser.id === comment.userId) {
            console.log("SHOWING DELETE")
            this.setState({
                deleteClass: "show-delete"
            });
        } else {
            console.log("HIDING DELETE")
        }
    }

    handleClick() {
        const { closeModal } = this.props;

        closeModal();
    }

    removeComment() {
        const {
            comment,
            currentUser,
            deleteComment
        } = this.props;

        if (comment.userId === currentUser.id) {
            deleteComment(comment.id);
        }
    }

    render() {
        const {
            comment,
            currentUser
        } = this.props;

        const {
            deleteClass, 
            username
        } = this.state;

        const deletable = comment.userId === currentUser.id ? "deletable" : "not-deletable";

        return (
            <>
                <li>
                    <span className="comment-username">
                        <Link onClick={this.handleClick} to={comment.username !== currentUser.username ? `/users/${comment.userId}` : `/profile`}>
                            {username}
                        </Link>

                        <span
                            onMouseEnter={this.deleteOrNot}
                            onMouseLeave={() => this.setState({ deleteClass: "hide-delete" })}
                            onClick={this.removeComment}
                            className={`comment-body ${deletable}`}> {comment.body}
                        </span>

                        <span className={deleteClass}>Delete</span>
                    </span>
                </li>
            </>
        )
    }
}
export default Comment;