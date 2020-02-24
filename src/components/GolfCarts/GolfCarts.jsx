import React, { useState, useEffect } from 'react'
import './golfCarts.scss'

const GolfCarts = () => {
  const [golfCartNumber, setGolfCartNumber] = useState(0)
  const golfCartPic = ['/Assets/GolfCart.jpg', '/Assets/GolfCart2.jpg']

  const subtract = () => {
    if (golfCartNumber !== 0) {
      setGolfCartNumber(golfCartNumber - 1)
    } else {
      setGolfCartNumber(golfCartPic.length - 1)
    }
  }

  const add = () => {
    if (golfCartNumber < golfCartPic.length - 1) {
      setGolfCartNumber(golfCartNumber + 1)
    } else {
      setGolfCartNumber(0)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (golfCartNumber < golfCartPic.length - 1) {
        setGolfCartNumber(golfCartNumber + 1)
      } else {
        setGolfCartNumber(0)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [golfCartNumber, golfCartPic.length])

  return (
    <div>
      <section className="headerSpacer" />
      <section className="golfCarts">
        <h1>Featured Golf Cart</h1>
        <section className="golfCartWrapper">
          <section className="picContainer">
            <button onClick={subtract}>
              <i class="fas fa-chevron-left" />
            </button>
            <img
              className="featuredGolfCartPic"
              src={golfCartPic[golfCartNumber]}
              alt="golf cart"
            />
            <button onClick={add}>
              <i class="fas fa-chevron-right" />
            </button>
          </section>
          <p className="description">
            2005 Club Car upgraded in 2019 with a six inch lift, new batteries,
            tires, suspension, led headlight, turn signal, horn, led feature
            lights, brake lights, usb plugs.
          </p>
        </section>
      </section>
    </div>
  )
}

export default GolfCarts
