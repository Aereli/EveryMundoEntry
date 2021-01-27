import { useContext, useEffect, useState } from 'react'
import Cards from './components/Cards'
import ResultsTable from './components/ResultsTable'
import { ModalContext } from './context/index'
const { REACT_APP_API_KEY } = process.env

const App = () => {
  const [resData, setResData] = useState(null)
  const { flightResults } = useContext(ModalContext)

  // console.log('home', Object.keys(flightResults))
  console.log(flightResults)

  useEffect(() => {
    fetch(
      `https://everymundotechnical.herokuapp.com/popularRoutes/${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setResData(data))
  }, [])

  return (
    <div style={{ textAlign: `center` }}>
      <h1>EveryMundo Flights</h1>
      {flightResults === 'empty' ? <Cards data={resData} /> : <ResultsTable />}
    </div>
  )
}

export default App
