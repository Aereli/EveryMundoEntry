import React, { useContext } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'

const ResultsTable = () => {
  const { flightResults } = useContext(ModalContext)

  return (
    <div className={styles.container}>
      <h1>Flight Results</h1>
      <table className={styles.table}>
        <tr className={styles.header}>
          <th>Destination</th>
          <th>Origin</th>
          <th>Trip Type</th>
          <th>Departure Date</th>
          <th>Fare Clase</th>
        </tr>
        {flightResults &&
          flightResults.data.map((res) => (
            <>
              <tr>
                <td>{res.destination}</td>
                <td>{res.origin}</td>
                <td>{res.tripType}</td>
                <td>{res.departureDate}</td>
                <td>{res.fareClass}</td>
              </tr>
              <tr>
                <th>Depature Time</th>
                <th>Arrival Time</th>
                <th>Price</th>
              </tr>
              {res.routes &&
                res.routes.map((route) => (
                  <tr>
                    <td>{route.departureTime}</td>
                    <td>{route.arrivalTime}</td>
                    <td>${route.priceUSD}</td>
                  </tr>
                ))}
            </>
          ))}
      </table>
      <div style={{ height: `300px` }}></div>
    </div>
  )
}

export default ResultsTable
