import { connect } from 'react-redux';

import { updatePost, fetchPost } from '../../actions/post_actions.js';
import { openModal, closeModal } from '../../actions/modal_actions';
import EditForm from './edit_form';

const mapStateToProps = ({ errors, entities }) => {
    return {
        errors: errors.session,
        post: entities.targetPost.post, //i need to target a specific post here!
        formType: 'editForm',
    };

};

const mapDispatchToProps = dispatch => ({
    updatePost: (post, id) => dispatch(updatePost(post, id)),
    fetchPost: post => dispatch(fetchPost(post.id)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditForm);