import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'demoUser',
            email: 'demoUser@aol.com',
            password: 'password'
        };
        this.handleSubmit = this.handleSubmit.bind(this);


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

    render() {
        return (
            <article className="page-container">
                <div className="page-container-box">
                    <div className="form-container">
                        <h1 className="form-header">Finstagram</h1>
                        <div className="form-container-box">
                            <form onSubmit={this.handleSubmit} className="form">
                                <br />
                                {this.renderErrors()}
                                <div className="form-label-container">
                                    <div className="form-label-container-box">
                                        <label className="form-label">
                                            <input
                                                type="text"
                                                value={this.state.username}
                                                onChange={this.update('username')}
                                                className="form-input"
                                                placeholder="Username"
                                            />
                                        </label>
                                    </div>
                                    <br />
                                    <div className="form-label-container">
                                        <label className="form-label-container-box">
                                            <input
                                                type="text"
                                                value={this.state.email}
                                                onChange={this.update('email')}
                                                className="form-input"
                                                placeholder="Email"
                                            />
                                        </label>
                                    </div>
                                    <br />
                                    <div className="form-label-container">
                                        <label className="form-label-container-box">
                                            <input
                                                type="password"
                                                value={this.state.password}
                                                onChange={this.update('password')}
                                                className="form-input"
                                                placeholder="Password"
                                            />
                                        </label>
                                    </div>
                                    <br />
                                    <div className="submit-button-container">
                                        <input className="submit-button" type="submit" value={this.props.formType} />
                                    </div>
                                    <br/>
                                    <div className="form-separator">
                                        OR
                                    </div>
                                    <br />
                                    <div className="submit-button-container">
                                        <input type="submit" value="Demo Login" className="submit-button" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="session-link-container">
                            <p>Dont have an account? </p>
                            <Link to="/signup" className="session-link">sign up</Link>
                        </div>
                        <div className="download-link-container">
                            <p>Get the app.</p>
                            <div className="download-link-container-box">
                                <a className="download-link" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo">Apple Store</a>
                                <br />
                                <a className="download-link" href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXQ59hQAEAAFKbAmuaEfztY0eCuef%26utm_content%3Dlo%26utm_medium%3Dbadge">Google Store</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

}

export default withRouter(SessionForm);