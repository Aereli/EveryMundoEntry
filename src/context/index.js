import React, { createContext, useState } from 'react'
import axios from 'axios'
const { REACT_APP_API_KEY } = process.env

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [modalToggle, setModalToggle] = useState(false)
  // this 'empty' bypasses the error .test.js was returning
  // TODO find better way around it
  const [flightResults, setFlightResults] = useState('empty')

  function chooseFlight(e, flightInfo, inputField) {
    e.preventDefault()
    // adjust flight object before POST req.. find a better way?!
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
      .then((res) => setFlightResults(res.data))
      .catch((err) => console.log(err))

    //close the modal after submit
    setModalToggle(false)
  }

  function toggleModalOnOrOff(value) {
    return setModalToggle(value)
  }

  return (
    <ModalContext.Provider
      value={{
        modalToggle,
        setModalToggle,
        flightResults,
        setFlightResults,
        chooseFlight,
        toggleModalOnOrOff,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
