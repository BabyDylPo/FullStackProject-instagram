import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';;

class Greeting extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            searchValue: ""
        }

        this.updateTargetUser = this.updateTargetUser.bind(this)
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout;
        this.openModal = this.props.openModal;

        this.clearSearch = this.clearSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.findUsers = this.findUsers.bind(this);
    
    }

    componentDidMount() {
        
        const {fetchAllUsers} = this.props; //why this?

        fetchAllUsers();

        document.addEventListener("keyDown", this.closeSearch);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.clearSearch);
    }

    clearSearch() {
        const input = document.getElementById("nav-search");
        input.value = "";
        input.blur(); //what does this do?

        this.setState({
            searchValue: ""
        });
    }

    closeSearch(e) {
        if (e.keyCode === 27) {
            this.clearSearch();
        }
    }

    findUsers(searchValue) {
        const {
            currentUser,
            users
        } = this.props; //does this work like mapStateToProps?

        let searchResults = [];

        if (searchValue) {
            users.forEach( (user, idx) => {
                if (user.username.toLowerCase().includes(searchValue.toLowerCase())
                /*|| user.username.toLowerCase().includes(searchValue.toLowerCase())*/ ) {
                    searchResults.push(
                        <li onClick={() => this.goToUser(user)} key={idx} className="search-li">
                            <aside className="search-photo-container">
                                <img className="search-photo" src={user.photoUrl} />
                            </aside>
                            <div>
                                <p>
                                    {user.username}
                                </p>

                                {/* <span className="search-name">
                                    {user.display_name} 
                                </span> */}
                            </div>
                        </li>
                    );
                }
            });
        }
        return searchResults.length === 0 ? null : searchResults;
    }

    update(field) {
        return (e) => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    updateTargetUser() {
        this.setState({ targetUser: this.props.fetchUser(this.currentUser.id) })
        this.props.fetchUser(this.currentUser.id).then(() => window.location = "/#/profile") // lol
    }

    render() {
        let searchResults;
        if ((this.findUsers(this.state.searchValue) === null) && (this.state.searchValue.length > 0)) {
            searchResults = <li className="search-li">
                <div className="no-result-search-containter">
                    <span className="no-result-search">
                        No results
                    </span>
                </div>
            </li>
        } else {
            searchResults = this.findUsers(this.state.searchValue);
            console.log(searchResults);
        }

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
                                <input type="text" 
                                       className="nav-search" 
                                       placeholder="search user" 
                                       onChange={this.update("searchValue")}
                                />
                                <ul className="search-results">
                                    {searchResults}
                                </ul>
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
