import React, { useContext, useState } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'

const Modal = ({ flightInfo }) => {
  const { setModalToggle } = useContext(ModalContext)
  console.log(flightInfo)
  return (
    <>
      <div className={styles.modal}>
        <h1>this is the new modal</h1>
        <form>
          <input type="text" value={flightInfo.destination}></input>
          <input type="text" value={flightInfo.origin}></input>
          <input type="date" value={flightInfo.departureDate}></input>
          <input type="date" value={flightInfo.returnDate}></input>
        </form>
        <button onClick={() => setModalToggle(false)}>close</button>
      </div>
      )
    </>
  )
}

export default Modal
