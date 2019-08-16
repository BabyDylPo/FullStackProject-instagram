import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';;

class Greeting extends Component {

    constructor(props) {
        super(props);
        this.updateTargetUser = this.updateTargetUser.bind(this)
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout;
        this.openModal = this.props.openModal;
    }

    updateTargetUser() {
        this.setState({ targetUser: this.props.fetchUser(this.currentUser.id) })
        this.props.fetchUser(this.currentUser.id).then(() => window.location = "/#/profile") // lol
    }

    render() {
        return (
            <div className="nav-container">
                <nav className="nav">
                    {/* <div></div> */}
                    <div className="nav-container-box">
                        <div className="nav-box">
                            <div className="home-element">
                                <button onClick={() => this.openModal('postForm')} className="post-form-link" >
                                    <img src={window.images.camera} alt="camera-icon" className="camera-icon" />
                                </button>
                                <div className="separator-decoration"></div>
                                <Link to="/home" id="home-link" className="home-link">

                                    <img src={window.images.logo} alt="logo" className="home-logo" />
                                </Link>
                            </div>
                            <div className="search-element">
                                <input type="text" className="nav-search" placeholder="search" />

                            </div>
                            <div className="nav-element">
                                <div className="nav-element-container">
                                    <div className="nav-sub-element">
                                        <a href="/#/home" className="nav-sub-element-link">
                                            <img src={window.images.compass} alt="compass-icon" className="icon" />
                                        </a>
                                    </div>
                                    <div className="nav-sub-element">
                                        <button onClick={this.logout} id="logout-button" className="nav-sub-element-link">
                                            <img src={window.images.heart} alt="heart-icon" className="icon" />
                                        </button>
                                    </div>
                                    <div className="nav-sub-element">
                                        <button onClick={this.updateTargetUser} id="logout-button" className="sub-element-link">
                                            <img src={window.images.profile} alt="profile-icon" className="icon" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Greeting;
