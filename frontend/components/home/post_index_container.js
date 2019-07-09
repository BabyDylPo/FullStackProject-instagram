import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, fetchPost, createPost } from '../../actions/post_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
    return({
        posts: asArray(state.entities),
    });
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: () => dispatch(fetchPost()),
    createPost: () => dispatch(createPost())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);