import { Link} from "gatsby"
import React from "react"
import { Router } from "@reach/router"
import HeaderDash from "./header-dash"
import { login, logout, isAuthenticated } from "../../utils/auth"


const Header = () => {
  const loggedIn = isAuthenticated()
  if (!loggedIn) {
    login()
  }

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
