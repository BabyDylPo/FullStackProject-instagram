import React from 'react';
//import containers here
import GreetingContainer from '../home/greeting_container';
import ProfileIndexContainer from './profile_index_container';

const App = () => (
    <div className="profile-container">
        <GreetingContainer />
        <ProfileIndexContainer />
    </div>
)

export default App;