/*
 * Molan: Molan WebApp - app/component/login_form
 * Author: Progyan Bhattacharya <progyanb@acm.org>
 *
 * Copyright 2018 Tech-Mantra, All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { connect } from "react-redux";
import { LOGIN_ACTION, SIGNUP_ACTION, LOGOUT_ACTION } from "../../action/actionTypes";
import userAuth from "../../action/loginAction";
import "./style.css";

const Email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.style = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                color: "rgb(0, 0, 0)",
                transform: "translate(-50%, -50%)"
            },
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.6)"
            }
        };
        this.snackbar = null;
        this.renderForm = this.renderForm.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (typeof nextProps.error !== "undefined" && nextProps.error !== null && nextProps.error !== this.props.error) {
            this.snackbar.className += "show";
            setTimeout(() => this.snackbar.className = this.snackbar.className.replace("show", ""), 3000);
        }
    }

    render() {
        return(
            <div>
                <Modal isOpen={this.props.showModal} contentLabel="Login Form Modal" style={this.style} ariaHideApp={false}>
                    <div className="form-icon-area">
                        <i className="fas fa-user fa-2x form-icon"></i>
                    </div>
                    {this.renderForm()}
                </Modal>
                <div id="snackbar" ref={e => this.snackbar = e}>{this.props.error}</div>
            </div>
        );
    }

    renderForm() {
        if (this.props.loggedIn) {
            return(
                <form>
                    <div className="form-group">
                        <label htmlFor="Email">You are logged in as</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email ID" value={this.props.username} readOnly={true} required="required"/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" onClick={() => this.onSubmit(LOGOUT_ACTION)}>Logout</button>
                        <button className="btn btn-default" onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </form>
            );
        } else {
            return(
                <form>
                    <div className="form-group">
                        <label htmlFor="Email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email ID" value={this.state.email} onChange={this.onChange} required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.onChange} required="required"/>
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary" onClick={() => this.onSubmit(LOGIN_ACTION)}>Login</button>
                        <button type="submit" className="btn btn-dark" onClick={() => this.onSubmit(SIGNUP_ACTION)}>Signup</button>
                        <button className="btn btn-default" onClick={this.props.closeModal}>Cancel</button>
                    </div>
                </form>
            );
        }
    }

    onChange(event) {
        let newState = Object.assign({}, this.state, { [event.target.id]: event.target.value });
        this.setState(newState);
    }

    onSubmit(env) {
        const { email, password } = this.state;
        if (email.length > 0 && Email.test(email) && password.length > 0) {
            let submitObject = Object.assign({}, { username: email, password: password });
            this.props.submitAuth(env, submitObject);
            this.setState({ email: "", password: "" });
            this.props.closeModal();
        }
    }
}

LoginForm.propTypes = {
    error:      PropTypes.string,
    loggedIn:   PropTypes.bool,
    username:   PropTypes.string,
    showModal:  PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    submitAuth: PropTypes.func
};

const mapStateToProps = function (state) {
    return {
        error:    state.loginReducer.error,
        loggedIn: state.loginReducer.loggedIn,
        username: state.loginReducer.username
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        submitAuth: (env, data) => dispatch(userAuth(env, data))
    };
};

const VisibleLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default VisibleLoginForm;
