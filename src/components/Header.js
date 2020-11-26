import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="main-header">
    <nav>
      <Link className='main-header__title' to="/dashboard">
        <h1>
        Expense <br />
          <span>Tracker</span>
        </h1>
      </Link>
      <button className="button-logout" title="Log Out" onClick={ startLogout }>
        <svg viewBox="0 0 25.3 23.71">
          <path d="M38,30.19H28.47c-.12,0-.23-.14-.23-.3V27.15c0-.24-.19-.38-.34-.26l-3,2.26-3,2.26a.35.35,0,0,0,0,.51l3,2.26,3,2.26c.15.12.34,0,.34-.26V33.49c0-.16.11-.3.23-.3H38a.27.27,0,0,0,.23-.29V30.49A.27.27,0,0,0,38,30.19Z" transform="translate(-12.89 -19.87)" />
          <path d="M30,22.88V20.17a.3.3,0,0,0-.3-.3H13.19a.3.3,0,0,0-.3.3V43.28a.31.31,0,0,0,.3.3H29.7a.31.31,0,0,0,.3-.3V40.57a.3.3,0,0,0-.3-.3H16.51A.31.31,0,0,1,16.2,40V23.49a.31.31,0,0,1,.31-.31H29.7A.31.31,0,0,0,30,22.88Z" transform="translate(-12.89 -19.87)" />
        </svg>
      </button>
    </nav>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
