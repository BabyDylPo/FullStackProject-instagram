import { connect } from 'react-redux';

import { editPost } from '../../actions/post_actions.js';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostForm from './post_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'editForm',
    };

};

const mapDispatchToProps = dispatch => ({
    editPost: post => dispatch(editPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);