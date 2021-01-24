import useModal from './components/Modal/useModal'
import CustomModal from './components/Modal'
import { useEffect, useState } from 'react'
import Cards from './components/Cards'
const { REACT_APP_API_KEY } = process.env

const App = () => {
  const [resData, setResData] = useState(null)
  const [itemModalOpen, setItemModalOpen, toggle] = useModal()

  useEffect(() => {
    fetch(
      `https://everymundotechnical.herokuapp.com/popularRoutes/${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setResData(data))
  }, [])

  return (
    <div>
      <h1>Home Page</h1>
      {/* <button onClick={toggle}>Show Modal</button> */}

      <Cards data={resData} />
    </div>
  )
}

export default App
