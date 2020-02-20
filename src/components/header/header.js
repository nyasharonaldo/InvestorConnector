import React from "react"
import HeaderDash from "./header-dash"
import { login, logout, isAuthenticated } from "../../utils/auth"
import { Link, Location, navigate } from "@reach/router"
import {navigate} from 'gatsby'
const Header = () => {
  const loggedIn = isAuthenticated()
  return (
    <Location>
      {({ location }) => {
        if (location.pathname !== "/" && !loggedIn) {
          login()

        }
        return <Component loggedIn={loggedIn} />
      }}
    </Location>
  )
}

const Component = ({ loggedIn }) => {
  if (!loggedIn) {
    return (
      <nav class="navbar bg-dark">
        <HeaderDash />
      </nav>
    )
  } else {
    return (
      <nav class="navbar bg-dark">
        <HeaderDash />
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <a
              href="#logout"
              onClick={e => {
                logout()
                e.preventDefault()
                navigate('/')
              }}
            >
              <i className="fa fa-sign-out" />
              <span class="hide-sm"> Sign Out</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
