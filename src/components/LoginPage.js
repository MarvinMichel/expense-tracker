import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin, startFacebookLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
  <div className="login-box-layout">
    <div className="login-box">
      <h1 className="login-box__title">Budget Planner</h1>
      <p>Keep your expenses under control</p>
      <label htmlFor="button">
        <button className="button button--m google" onClick={ startGoogleLogin }>Sign in with Google</button>
        <button className="button button--m facebook" onClick={ startFacebookLogin }>Sign in with Facebook</button>
      </label>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
  startFacebookLogin: () => dispatch(startFacebookLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);