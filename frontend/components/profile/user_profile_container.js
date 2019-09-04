import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchAllPosts } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        posts: Object.values(state.entities.posts).reverse(),
        user: state.entities.users[ownProps.match.params.userId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchUser: (id) => dispatch(fetchUser(id)),
        logout: () => dispatch(logout()),
        openModal: (type, options) => dispatch(openModal(type, options))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);