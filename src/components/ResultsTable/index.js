import React, { useContext } from 'react'
import { ModalContext } from '../../context'
import styles from './styles.module.scss'

const ResultsTable = () => {
  const { flightResults } = useContext(ModalContext)

  return (
    <>
      {/* this toggles the entire table to show when there is no data */}
      {flightResults !== 'empty' && (
        <div className={styles.container}>
          <h1>Flight Results</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.header}>
                <th>Destination</th>
                <th>Origin</th>
                <th>Trip Type</th>
                <th>Departure Date</th>
                <th>Fare Clase</th>
              </tr>
              {flightResults &&
                flightResults.map((res, i) => (
                  <>
                    <tr key={i}>
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
                    {res &&
                      res.routes.map((route, i) => (
                        <tr key={i}>
                          <td>{route.departureTime}</td>
                          <td>{route.arrivalTime}</td>
                          <td>${route.priceUSD}</td>
                        </tr>
                      ))}
                  </>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default ResultsTable
