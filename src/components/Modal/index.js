import React, { useContext, useState } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'
import axios from 'axios'
const { REACT_APP_API_KEY } = process.env

const Modal = ({ flightInfo }) => {
  const { setModalToggle, setFlightResults } = useContext(ModalContext)
  const [inputField, setInputField] = useState({
    promoCode: '',
    passengerCount: 1,
  })

  function chooseFlight(e) {
    e.preventDefault()
    // adjust flight object before POST req
    flightInfo.passengerCount = parseInt(inputField.passengerCount)
    flightInfo.promoCode = inputField.promoCode
    delete flightInfo.fareClass
    delete flightInfo.priceUSD
    delete flightInfo.routeCoverImage

    axios
      .post(
        `https://everymundotechnical.herokuapp.com/search/${REACT_APP_API_KEY}`,
        flightInfo
      )
      .then((res) => setFlightResults(res))
      .catch((err) => console.log(err))

    //close the modal after submit
    setModalToggle(false)
  }

  function inputChangeHandler(e) {
    setInputField({ ...inputField, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.modal}>
      <h1>Add Passengers to your flight!</h1>

      <form onSubmit={(e) => chooseFlight(e)}>
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

        {/* TODO: Normally I would not use <br />, replace using css */}
        <div className={styles.formSection}>
          <label>From*</label>
          <input
            type="text"
            value={flightInfo.destination}
            name="origin"
            onChange={inputChangeHandler}
          ></input>
          <br />
          <label>To*</label>
          <input
            type="text"
            value={flightInfo.origin}
            name="destination"
            onChange={inputChangeHandler}
          ></input>
          <br />
          {/* TODO: change date format to be able to use 'date' as type property for the input */}
          <label>Depart*</label>
          <input
            type="text"
            value={flightInfo.departureDate}
            onChange={inputChangeHandler}
          ></input>
          <br />
          <label>Return*</label>
          <input
            type="text"
            value={flightInfo.returnDate}
            onChange={inputChangeHandler}
          ></input>
          <br />
          <label>Passengers*</label>
          <input
            type="number"
            value={flightInfo.passengerCount}
            name="passengerCount"
            onChange={inputChangeHandler}
          ></input>
          <br />
          <label>Promo</label>
          <input
            type="text"
            name="promoCode"
            value={flightInfo.promoCode}
            onChange={inputChangeHandler}
          ></input>
        </div>

        <div className={styles.buttons}>
          <button type="submit">Choose Flight</button>
          <button onClick={() => setModalToggle(false)}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Modal
