import React from 'react';
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
