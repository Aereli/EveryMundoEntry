import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [modalToggle, setModalToggle] = useState(false)
  const [flightResults, setFlightResults] = useState(null)

  return (
    <ModalContext.Provider
      value={{ modalToggle, setModalToggle, flightResults, setFlightResults }}
    >
      {children}
    </ModalContext.Provider>
  )
}
