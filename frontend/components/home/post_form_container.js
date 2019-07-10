import { connect } from 'react-redux';

import { createPost } from '../../actions/post_actions.js';
import PostForm from './post_form';

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post))
});

export default connect(
    null,
    mapDispatchToProps
)(PostForm);
