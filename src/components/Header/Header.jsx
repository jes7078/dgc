import React from 'react'
import './header.scss'
import { ReactComponent as DGC } from '../../Logo/DGC.svg'

const Header = () => {
  return (
    <section className="menu">
      <section className="wrapper">
        <DGC className="logo" fill="lightSteelBlue"></DGC>
      </section>
      <section className="titleAndLinks">
        <h1>Dunedin Golf Carts</h1>
        <section className="menuLinks">
          <ul>
            <li>
              <a href="#aboutSection">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  )
}

export default Header
