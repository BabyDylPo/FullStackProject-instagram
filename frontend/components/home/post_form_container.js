import { connect } from 'react-redux';

import { createPost } from '../../actions/post_actions.js';
import { openModal, closeModal } from '../../actions/modal_actions';
import PostForm from './post_form';

const mapStateToProps = ({errors}) => {
    return{
        errors: errors.session,
        formType: 'postForm',
    };
    
};

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostForm);
