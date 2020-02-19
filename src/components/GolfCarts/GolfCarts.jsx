import React from 'react'
import './golfCarts.scss'
import GolfCart from '../../Assets/GolfCart.jpg'

const GolfCarts = () => {
	return (
		<div>
			<section className="headerSpacer" />
			<section className="golfCarts">
				<h1>Featured Golf Cart</h1>
				<section className="golfCartWrapper">
					<section className="picContainer">
						<img className="featuredGolfCartPic" src={GolfCart} alt="golf cart" />
					</section>
					<p className="description">
						2005 Club Car upgraded in 2019 with a six inch lift, new batteries, tires, suspension, led
						headlight, turn signal, horn, led feature lights, brake lights, usb plugs.
					</p>
				</section>
			</section>
		</div>
	)
}

export default GolfCarts
