import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

//import containers here
import GreetingContainer from './greeting_container';
import PostIndexContainer from './post_index_container';

const App = () => (
    <div className="home-container">
        <GreetingContainer />
        <PostIndexContainer />
    </div>
)

export default App;

// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

// import GreetingContainer from './greeting_container';
// import PostIndexContainer from './post_index_container';

// class Home extends Component {
//     componentDidMount() {
//         this.props.requestAllPosts();
//     }

//     render() {
//         return (
//             <div className="home-container">
//                 <GreetingContainer />
//                 <section className="post-index">
//                     <PostIndexContainer />
//                 </section>
//             </div>
//         );
//     }
// }

// export default Home;