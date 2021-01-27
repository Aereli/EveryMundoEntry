import { useEffect, useState } from 'react'
import { ModalContextProvider } from './context'
import Cards from './components/Cards'
import ResultsTable from './components/ResultsTable'
const { REACT_APP_API_KEY } = process.env

const App = () => {
  const [resData, setResData] = useState(null)

  useEffect(() => {
    fetch(
      `https://everymundotechnical.herokuapp.com/popularRoutes/${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setResData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <ModalContextProvider>
      <h1 style={{ textAlign: `center`, margin: `2rem` }}>
        EveryMundo Flights
      </h1>
      <Cards data={resData} />
      <ResultsTable />
    </ModalContextProvider>
  )
}

export default App
