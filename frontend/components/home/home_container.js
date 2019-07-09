import { connect } from 'react-redux';

import { asArray } from '../../reducers/selectors';
import Home from './home';

const mapStateToProps = state => ({
    posts: asArray(state.entities)
});

// const mapDispatchToProps = dispatch => ({
//     updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
// });

export default connect(mapStateToProps)(Home);