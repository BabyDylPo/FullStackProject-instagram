import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, fetchPost, createPost, deletePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { asArray } from '../../reducers/selectors';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return({
        posts: asArray(state.entities.posts).reverse(),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id]
    });
};

const mapDispatchToProps = dispatch => {
  return({
      fetchPosts: () => dispatch(fetchPosts()),
      fetchPost: () => dispatch(fetchPost()),
      createPost: () => dispatch(createPost()),
      fetchAllUsers: () => dispatch(fetchAllUsers()),
      deletePost: id => dispatch(deletePost(id)),
      openModal: modal => dispatch(openModal(modal))
  })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);