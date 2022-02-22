import * as React from 'react'
import { Link } from 'gatsby'
import Footer from "../components/footer" 
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from './layout.module.css'
const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{"Simple comme une donnée"}</title>
      <h1 className={heading}>{"Simple comme une donnée"}</h1>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/data-curiosities" className={navLinkText}>
              Data-curiosités
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              À propos
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <hr></hr>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
