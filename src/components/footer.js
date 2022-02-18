import React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
  } from './layout.module.css'
  const Footer = () => {
  return <footer className={navLinkText}>
    <hr></hr>
    Bonjour
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="https://twitter.com/Etienne010101" className={navLinkText}>
            <StaticImage
        className="SocialLogo"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/twitter-logo.png"
        width={40}
        height={40}
        quality={95}
      />
            </Link>
          </li>
          <li className={navLinkItem}>
          <Link to="https://www.linkedin.com/in/etiennepichotdamon/" className={navLinkText}>
            <StaticImage
        className="SocialLogo"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo-linkedin.png"
        width={40}
        height={40}
        quality={95}
      />
            </Link>
          </li>
        </ul>
      </nav>
      
      </footer>;
};
export default Footer;