import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [modalToggle, setModalToggle] = useState(false)

  return (
    <ModalContext.Provider value={{ modalToggle, setModalToggle }}>
      {children}
    </ModalContext.Provider>
  )
}
