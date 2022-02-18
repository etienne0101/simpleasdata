import React from "react"
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    footerElements,
  } from './footer.module.css'
  const Footer = () => {
  return <footer className={navLinkItem}>
    <hr></hr>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="https://twitter.com/Etienne010101" className={navLinkItem}>
            <StaticImage
        className="SocialLogo"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/twitter-logo.png"
        width={38}
        height={38}
        quality={95}
      />
            </Link>
          </li>
          <li className={navLinkItem}>
          <Link to="https://www.linkedin.com/in/etiennepichotdamon/" className={navLinkItem}>
            <StaticImage
        className="SocialLogo"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo-linkedin.png"
        width={44}
        height={44}
        quality={95}
      />
            </Link>
          </li>
          <li className={navLinkItem}>
          <Link to="https://github.com/etienne0101/simpleasdata" className={navLinkItem}>
            <StaticImage
        className="SocialLogo"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/github-logo.png"
        width={38}
        height={38}
        quality={95}
      />
      </Link>
          </li>
          <li className={navLinkItem}>
          <Link to="https://www.linkedin.com/in/etiennepichotdamon/" className={navLinkItem}>
            <StaticImage
        className="SocialLogo"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/youtube-logo.png"
        width={45}
        height={45}
        quality={95}
      />
            </Link>
          </li>
        </ul>
      </nav>
      
      </footer>;
};
export default Footer;