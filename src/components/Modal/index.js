import React, { useContext, useState } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'

const Modal = ({ flightInfo }) => {
  const { setModalToggle } = useContext(ModalContext)
  console.log(flightInfo)
  return (
    <>
      <div className={styles.modal}>
        <h1>Flight Booked!</h1>

        <form>
          <div className={styles.radio}>
            <input
              type="radio"
              value="oneWay"
              name="tripType"
              checked={'oneWay' === flightInfo.tripType}
            />
            <label>One Way</label>
            <input
              type="radio"
              value="roundTrip"
              name="tripType"
              checked={'roundTrip' === flightInfo.tripType}
            />
            <label>Round Trip</label>
          </div>

          {/* NOTE: Normally I would not use <br /> */}
          <div className={styles.formSection}>
            <label>From*</label>
            <input type="text" value={flightInfo.destination}></input>
            <br />
            <label>To*</label>
            <input type="text" value={flightInfo.origin}></input>
            <br />
            <label>Depart*</label>
            <input type="date" value={flightInfo.departureDate}></input>
            <br />
            <label>Return*</label>
            <input type="date" value={flightInfo.returnDate}></input>
            <br />
            <label>Passengers*</label>
            <input type="number" value=""></input>
            <br />
            <label>Promo</label>
            <input type="text" value=""></input>
          </div>
        </form>

        <button onClick={() => setModalToggle(false)}>close</button>
      </div>
      )
    </>
  )
}

export default Modal
