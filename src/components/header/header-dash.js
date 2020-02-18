import React from "react"
import { Link } from "gatsby"
const Header = ({ siteTitle }) => (
  <h1 class='header-dash'>
    <Link to='/blog'>
      <i class="fa fa-code"></i> InvestorConnector
    </Link>
  </h1>
)

export default Header