import React from 'react'
import { withSiteData, Link } from 'react-static'
//
export default withSiteData(() => (
  <header>
    <div className="brand-logo">
      <span className="images"></span>
      <span className="split"></span>
      <span className="desc">Developer</span>
    </div>
    <nav>
      <Link to="/app_developer">App Dev</Link>
      <Link to="/core_developer">Core Dev</Link>
      <Link to="/discover">Discover</Link>
    </nav>
    <div className="opts">
      <div className="opt community"><Link to="/" /></div>
    </div>
  </header>
))
