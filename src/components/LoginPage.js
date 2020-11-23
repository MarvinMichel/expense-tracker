import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="login-box-layout">
    <div className="login-box">
      <h1 className="login-box__title">Budget Planner</h1>
      <p>Keep your expenses under control</p>
      <button className="button button--m" onClick={ startLogin }>Sign in with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);