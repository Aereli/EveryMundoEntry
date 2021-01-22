import React from 'react'
import styles from './styles.module.scss'

const Cards = ({ data }) => {
  return (
    <div className={styles.container}>
      {data &&
        data.map((flight) => (
          <div id="border" className={styles.flightContainer}>
            <img src={flight.routeCoverImage} alt="fligh-cover" />
            <h1>
              {flight.origin}
              <span> → </span>
              {flight.destination}
            </h1>

            <p>Departs: {flight.departureDate}</p>

            <div className={styles.priceContainer}>
              <p>Fares From*</p>
              <p className={styles.price}>$72</p>
              <p>{flight.tripType}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Cards
