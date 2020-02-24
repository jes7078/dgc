import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './hamburger.scss'
import props from 'prop-types'

// const toggleMenuClasses = () => {
//   let hamburgerIcon = document.getElementById('burger')
//   hamburgerIcon.classList.toggle('is-active')
//   let mobileMenu = document.getElementById('menu-container')
//   mobileMenu.classList.toggle('opened')
// }

// const handleClick = e => {
//   let mobileMenu = document.getElementById('menu-container')
//   console.log(mobileMenu.classList.value)
//   if (mobileMenu.classList.value === 'menu-container opened') {
//     mobileMenu.classList.toggle('opened')
//   } else {
//   }
// }

const Menu = () => {
  const [Open, setOpen] = useState(false)
  // useEffect(() =>
  //   props.history.listen(() => {
  //     setIsMenuOpen(false)
  //   })
  // )

  return (
    <section>
      <section className="burger" id="burger" onClick={() => setOpen(!Open)}>
        <section className="lines">
          <section className="line" />
          <section className="line" />
          <section className="line" />
        </section>
      </section>
      <section className="menu-container" id="menu-container">
        <section className="menu-title">Dunedin Golf Carts</section>
        <a
          className="menu-github"
          id="burger"
          onClick={() => setOpen(true)}
          href="#aboutSection"
        >
          About
        </a>
        <a
          className="menu-twitter"
          id="burger"
          onClick={() => setOpen(true)}
          href="#contact"
        >
          Contact
        </a>
      </section>
    </section>
  )
}

export default Menu
