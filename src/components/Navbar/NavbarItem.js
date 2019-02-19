import React from 'react'

/**
 * @function NavbarItem
 * @param text - Any text or react element
 * @param {string} href - link or url
 * @param {boolean} isLinkWillOpenInNewWindow - will put target="_blank" and rel="noopenner noreferrer" to a tag when true
 */

const NavbarItem = ({ text, href, isLinkWillOpenInNewWindow = false }) => {
  const linkTagOptions = !isLinkWillOpenInNewWindow
    ? {}
    : {
        target: '_blank',
        rel: 'noopenner noreferrer',
      }
  return (
    <a href={href} className="navbar-item" {...linkTagOptions}>
      {text}
    </a>
  )
}

export default NavbarItem
