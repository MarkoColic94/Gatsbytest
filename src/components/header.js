import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/brunel-logo.png"

const Header = () => (
  <header
    style ={{
      background: `#00325b`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
      }}
    >
      <img style={{width: 120}} src={logo} alt="brunel-university" />
      <div className="menu">
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
