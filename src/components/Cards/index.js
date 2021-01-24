import React, { useState } from 'react'
import Modal from '../Modal'
import styles from './styles.module.scss'
import useModal from '../Modal/useModal'
import CustomModal from '../Modal'

const Cards = ({ data }) => {
  // console.log(data)
  // const [toggle, setToggle] = useState(false)
  const [currentFlight, setCurrentFlight] = useState(null)

  const { toggle, modalOpen } = useModal

  function sendModal(flight) {
    toggle()
    setCurrentFlight(flight)
    return currentFlight
  }

  return (
    <div className={styles.container}>
      {/* {modalOpen && ( */}
      {/* // <div className={styles.modal}>
        //   <h1>this is the new modal</h1>
        //   <form>
        //     <input type="text">{flight.destination}</input>
        //     <input type="text">{flight.origin}</input>
        //     <input type="date">{flight.departureDate}</input>
        //     <input type="date">{flight.returnDate}</input>
        //   </form>
        // </div>
      //   <CustomModal flight={currentFlight} />
      // )} */}
      {data &&
        data.map((flight) => (
          <button
            className={styles.flightContainer}
            onClick={() => sendModal(flight)}
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
