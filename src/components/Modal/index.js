import React, { useState } from 'react'
import styles from './styles.module.scss'
import useModal from './useModal'

const CustomModal = ({ flight }) => {
  console.log(flight)
  const { toggle } = useModal
  return (
    // <Modal isActive={isActive}>
    //   <ModalBackground onClick={handleClose} />
    //   <ModalContent
    //     style={{ backgroundColor: 'white', padding: '2rem', maxWidth: '60vw' }}
    //   >
    //     <Title isSize={6}>{title}</Title>
    //     {children}
    //   </ModalContent>
    //   <ModalClose onClick={handleClose} />
    // </Modal>
    <div className={styles.modal}>
      <h1>this is the new modal</h1>
      <form>
        <input type="text" value={flight.destination}></input>
        <input type="text" value={flight.origin}></input>
        <input type="date" value={flight.departureDate}></input>
        <input type="date" value={flight.returnDate}></input>
      </form>
      <button onClick={toggle}>close</button>
    </div>
  )
}

export default CustomModal
