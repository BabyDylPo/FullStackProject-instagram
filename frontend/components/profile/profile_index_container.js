import { connect } from 'react-redux';

import ProfileIndex from './profile_index';
import { fetchPosts, fetchPost, createPost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return ({
        posts: asArray(state.entities.posts).reverse(),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id],
        targetPost: state.entities.targetPost,
        targetUser: state.entities.targetUser
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPost: id => dispatch(fetchPost(id)),
        createPost: () => dispatch(createPost()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        deletePost: id => dispatch(deletePost(id)),
        openModal: modal => dispatch(openModal(modal))
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileIndex);