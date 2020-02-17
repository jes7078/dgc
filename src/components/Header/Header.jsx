import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
  return (
    <section className="menu">
      <h1>Dunedin Golf Carts</h1>
      <section className="menuLinks">
        <ul>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Header
