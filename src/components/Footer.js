import React from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
export default function Footer() {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          // console.log(link)
          return (
            <li key={id}>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
