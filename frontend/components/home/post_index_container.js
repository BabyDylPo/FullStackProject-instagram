import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, fetchPost, createPost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => {
    return({
        posts: asArray(state.entities.posts),
        users: state.entities.users
    });
};

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchPost: () => dispatch(fetchPost()),
    createPost: () => dispatch(createPost()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);