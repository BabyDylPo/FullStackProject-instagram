import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/">Signup</Link>
        </nav>
    )
    const personalGreeting = () => (
        <div className="nav-container">
            <nav className="nav">
                {/* <div></div> */}
                <div className="nav-container-box">
                    <div className="nav-box">
                        
                        <div className="home-element">
                            <Link to="/home" id="home-link" className="home-link">
                                <img src={window.images.logo} alt="logo" className="home-logo"/>
                            </Link>
                        </div>
                        <div className="search-element">
                            <input type="text" className="nav-search" placeholder="search"/>
                        </div>
                        <div className="nav-element">
                            <div className="nav-element-container">
                                <div className="nav-sub-element">
                                    <a href="" className="nav-sub-element-link">
                                        <img src={window.images.compass} alt="compass-icon" className="icon" />
                                    </a>
                                </div>
                                <div className="nav-sub-element">
                                    <a href="" className="nav-sub-element-link">
                                        <img src={window.images.heart} alt="heart-icon" className="icon" />
                                    </a>
                                </div>
                                <div className="nav-sub-element">
                                    <a href="" className="sub-element-link">
                                        <img src={window.images.profile} alt="profile-icon" className="icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
    return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;