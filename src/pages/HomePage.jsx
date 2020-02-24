import React from 'react'
import Header from '../components/Header/Header'
import Hamburger from '../components/Hamburger/Hamburger'
import GolfCarts from '../components/GolfCarts/GolfCarts'
import About from '../components/About/About'
import Contact from '../components/ Contact/Contact'

const HomePage = () => {
	return (
		<section>
			<Header />
			<Hamburger />
			<GolfCarts />
			<About />
			<Contact />
		</section>
	)
}

export default HomePage
