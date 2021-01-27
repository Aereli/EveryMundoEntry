import React, { useContext, useState } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'

const Modal = ({ flightInfo }) => {
  const { chooseFlight, toggleModalOnOrOff } = useContext(ModalContext)

  const [inputField, setInputField] = useState({
    promoCode: '',
    passengerCount: 1, // default passenger if none are selected.
  })

  function inputChangeHandler(e) {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.modal}>
      <h1>Add Passengers to your flight!</h1>

      <form onSubmit={(e) => chooseFlight(e, flightInfo, inputField)}>
        <div className={styles.radio}>
          <input
            type="radio"
            value="oneWay"
            name="tripType"
            defaultChecked={'oneWay' === flightInfo.tripType}
          />
          <label>One Way</label>
          <input
            type="radio"
            value="roundTrip"
            name="tripType"
            defaultChecked={'roundTrip' === flightInfo.tripType}
          />
          <label>Round Trip</label>
        </div>
        {/* //TODO Normally I would not use <br />, replace using css */}
        <div className={styles.formSection}>
          <label>From*</label>
          <input
            type="text"
            value={flightInfo.destination}
            name="origin"
            onChange={inputChangeHandler}
          />
          <br />
          <label>To*</label>
          <input
            type="text"
            value={flightInfo.origin}
            name="destination"
            onChange={inputChangeHandler}
          />
          <br />
          {/* // TODO change date format to be able to use 'date' as type property for the input*/}

          <label>Depart*</label>
          <input
            type="text"
            value={flightInfo.departureDate}
            onChange={inputChangeHandler}
          />
          <br />
          <label>Return*</label>
          <input
            type="text"
            value={flightInfo.returnDate}
            onChange={inputChangeHandler}
          />
          <br />
          <label>Passengers*</label>
          <input
            type="number"
            value={inputField.passengerCount}
            name="passengerCount"
            onChange={inputChangeHandler}
          />
          <br />
          <label>Promo</label>
          <input
            type="text"
            name="promoCode"
            value={flightInfo.promoCode}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit">Choose Flight</button>
          <button onClick={() => toggleModalOnOrOff(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Modal
