//React
import React from 'react';
import ReactDOM from 'react-dom';
//components
import Root from './components/root';
import configureStore from './store/store';
import { logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if(window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //IF YOU COMMIT THE ABOVE IN, COMMIT THE DIRECTLY BELOW OUT vis a vis
    // let store = configureStore();
    window.store = store;
    window.logout = logout;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    
})