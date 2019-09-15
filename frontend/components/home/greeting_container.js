import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchUser, fetchAllUsers } from '../../actions/user_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({ session, entities: { users }, entities }) => {
    return {
        currentUser: users[session.id],
        targetUser: entities.targetUser,
        users: Object.values(entities.users)
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);