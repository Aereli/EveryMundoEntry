import React from 'react'
import styles from './styles.module.scss'

const Cards = () => {
  return (
    <div id="border" className={styles.container}>
      <img src="https://images.unsplash.com/photo-1543069596-c8a9b7e75a4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
      <h1 className={styles.test}>DTW - FLL</h1>
      <h2>Detroit to</h2>
      <h1>Fort Lauderale</h1>
      <p>04/16/2020</p>
      <div className={styles.priceContainer}>
        <p>Fares From*</p>
        <p className={styles.price}>$72</p>
        <p>one way</p>
      </div>
    </div>
  )
}

export default Cards
