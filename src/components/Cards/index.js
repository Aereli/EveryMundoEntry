import Modal from '../Modal/index'
import React, { useContext, useState } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'

const Cards = ({ data }) => {
  const { modalToggle, toggleModalOnOrOff } = useContext(ModalContext)
  const [flightInfo, setFlightInfo] = useState(null)

  return (
    <div className={styles.container}>
      {modalToggle && <Modal flightInfo={flightInfo} />}

      {data &&
        data.map((flight, i) => (
          <button
            key={i}
            className={styles.flightContainer}
            onClick={() => {
              toggleModalOnOrOff(true)
              setFlightInfo(flight)
            }}
          >
            <img src={flight.routeCoverImage} alt="flight-cover" />
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
          </button>
        ))}
    </div>
  )
}

export default Cards
