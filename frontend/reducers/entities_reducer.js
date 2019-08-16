import { combineReducers } from 'redux';

import users from './users_reducer';
import posts from './posts/posts_reducer';
import targetPost from './posts/target_post_reducer';
import targetUser from './target_user_reducer';

export default combineReducers({
    users,
    posts,
    targetPost,
    targetUser
});