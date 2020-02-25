import React, { useRef, useState } from 'react'
import './hamburger.scss'
import useOutsideClick from './useOutsideClick'

const Menu = () => {
  const ref = useRef()
  const [burgerStatus, setBurgerStatus] = useState('burger')
  const [menuStatus, setMenuStatus] = useState('menu-container')
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    if (toggle === false) {
      setToggle(true)
      setBurgerStatus('burger is-active')
      setMenuStatus('menu-container opened')
    } else {
      setToggle(false)
      setBurgerStatus('burger')
      setMenuStatus('menu-container')
    }
  }
  useOutsideClick(ref, () => {
    setToggle(false)
    setBurgerStatus('burger')
    setMenuStatus('menu-container')
  })

  return (
    <section ref={ref}>
      <section className={burgerStatus} id="burger" onClick={handleClick}>
        <section className="lines">
          <section className="line" />
          <section className="line" />
          <section className="line" />
        </section>
      </section>
      <section className={menuStatus} id="menu-container">
        <section className="menu-title">Dunedin Golf Carts</section>
        <a
          className="menu-github"
          id="burger"
          onClick={handleClick}
          href="#aboutSection"
        >
          About
        </a>
        <a
          className="menu-twitter"
          id="burger"
          onClick={handleClick}
          href="#contact"
        >
          Contact
        </a>
      </section>
    </section>
  )
}

export default Menu
