import { connect } from "react-redux";
import Comment from "./comment";
import { deleteComment } from "../../actions/comment_actions";
import { fetchAllUsers } from '../../actions/user_actions';
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        comment: state.entities.comments[ownProps.commentId],
        currentUser: state.entities.users[state.session.id],
        users: Object.values(state.entities.users)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        deleteComment: (comment) => dispatch(deleteComment(comment)),
        fetchAllUsers: () => dispatch(fetchAllUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);