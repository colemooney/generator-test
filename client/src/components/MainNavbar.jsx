import React from 'react'
import api from '../api'
import logo from '../logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <nav className="App-header">
      <h1>
        <img
          src="https://spxeastwebfarm8-spherexxcom.netdna-ssl.com/common/uploads/zrs2019/505/media/2a7d8d7d-0bd3-4060-9bef-0b8b68a61753.png"
          className="App-logo"
          alt="logo"
        />
      </h1>
      {/* <h1 className="App-title">4 West Online</h1> */}
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/countries">Posts</NavLink>
      <NavLink to="/add-country">Podcast</NavLink>
      {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
      {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
      {api.isLoggedIn() && (
        <>
          <Link to="/" onClick={handleLogoutClick}>
            Logout
          </Link>

          <NavLink to="/secret">Make Post</NavLink>
        </>
      )}
    </nav>
  )
}

export default withRouter(MainNavbar)
