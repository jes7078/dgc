import React from 'react'
import './hamburger.scss'

const toggleMenuClasses = () => {
	let hamburgerIcon = document.getElementById('burger')
	hamburgerIcon.classList.toggle('is-active')
	let mobileMenu = document.getElementById('menu-container')
	mobileMenu.classList.toggle('opened')
}

const Menu = () => {
	return (
		<section>
			<section className="burger" id="burger" onClick={toggleMenuClasses}>
				<section className="lines">
					<section className="line" />
					<section className="line" />
					<section className="line" />
				</section>
			</section>
			<section className="menu-container" id="menu-container">
				<section className="menu-logo">
					{/* <img
            className="menu-logo-img"
            src={require('../../assets/7venthSunLogo.jpeg')}
            alt="logo"
          /> */}
				</section>
				<section className="menu-title">Menu Title</section>
				<a className="menu-github" href="#aboutSection">
					About
				</a>
				<a className="menu-twitter" href="#contact">
					Contact
				</a>
			</section>
		</section>
	)
}

export default Menu
