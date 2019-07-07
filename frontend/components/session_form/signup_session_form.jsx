import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);

    }



    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }


    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    /////////////////////////////////////////////////////////////////////
    async demoLogin(e) {
        e.preventDefault();

        // const demoUser = {
        //     username: 'demoUser',
        //     email: 'demoUser@aol.com',
        //     password: 'password'
        // };

        // const sleep = ms => new Promise(res => setTimeout(res, ms));

        // document.getElementById('username-input').focus();
        // for (let i = 1; i <= demoUser.username.length; i++) {
        //     this.setState({ username: demoUser.username.substr(0, i) });
        //     await sleep(50);
        // }

        // await sleep (250);

        // document.getElementById('email-input').focus();
        // for (let i = 1; i <= demoUser.email.length; i++) {
        //     this.setState({ email: demoUser.email.substr(0, i) });
        //     await sleep(50);
        // }

        // await sleep(250);

        // document.getElementById('password-input').focus();
        // for (let i = 1; i <= demoUser.password.length; i++) {
        //     this.setState({ password: demoUser.password.substr(0, i) });
        //     await sleep(50);
        // }

        // await sleep(250);

        document.getElementById('login-link').click();
        // document.getElementById('password-input').blur();
    }
    /////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <article className="page-container">
                <div className="page-container-box">
                    <div className="form-container">
                        <div className="form-container-box">
                            <div className="logo-container"><img src={window.images.logo} alt="logo" className="logo" /></div>
                            <form onSubmit={this.handleSubmit} className="form">
                                <h2 className="form-description">Sign up to see fake photos and fake videos from your fake friends.</h2>

                                <div className="submit-button-container">
                                    <button className="submit-button" onClick={this.demoLogin} >Demo</button>
                                </div>

                                <div className="form-separator">
                                    <div className="form-separator-decoration"></div>
                                    <div className="form-separator-content">or</div>
                                    <div className="form-separator-decoration"></div>
                                </div>

                                <div className="form-label-container">
                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.update('username')}
                                                className="form-input"
                                                placeholder="Username"
                                                id="username-input"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.update('email')}
                                                className="form-input"
                                                placeholder="Email"
                                                id="email-input"
                                            />
                                        </label>
                                    </div>

                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}
                                                className="form-input"
                                                placeholder="Password"
                                                id="password-input"
                                            />
                                        </label>
                                    </div>

                                    <div className="submit-button-container">
                                        <input className="submit-button" type="submit" value="Sign Up" />
                                    </div>

                                    <div className="errors-container">
                                        {this.renderErrors()}
                                    </div>

                                    <div className="terms-container">
                                        <p>
                                            By signing up, you agree to our list of things you are not going to read.
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="session-link-container">
                            <p className="session-question">Have an account? </p>
                            <Link to="/login" id="login-link" className="session-link">Log in</Link>
                        </div>
                        <div className="download-link-container">
                            <p>Get the app.</p>
                            <div className="download-link-container-box">
                                <a className="download-link" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"><img src={window.images.apple} alt="apple logo" className="download-link-image" /></a>

                                <a className="download-link" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXQ59hQAEAAFKbAmuaEfztY0eCuef%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src={window.images.google} alt="google logo" className="download-link-image" /></a>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        );
    }

}

export default withRouter(SessionForm);