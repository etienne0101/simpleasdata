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
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Accueil
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
        <h1 className={heading}>{"Simple comme une donnée"}</h1>
        <hr></hr>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
