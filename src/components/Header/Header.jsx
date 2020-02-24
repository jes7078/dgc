import React from 'react'
import './header.scss'

const Header = () => {
	return (
		<section className="menu">
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
	)
}

export default Header
