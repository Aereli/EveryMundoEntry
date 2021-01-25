import useModal from './components/Modal/useModal'
// import CustomModal from './components/Modal'
import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import { ModalContextProvider } from './context'
// import Modal from './components/Modal'
const { REACT_APP_API_KEY } = process.env

const App = () => {
  const [resData, setResData] = useState(null)
  // const [itemModalOpen, setItemModalOpen, toggle] = useModal()

  useEffect(() => {
    fetch(
      `https://everymundotechnical.herokuapp.com/popularRoutes/${REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setResData(data))
  }, [])

  return (
    <div>
      <ModalContextProvider>
        <h1>Home Page</h1>
        <Cards data={resData} />
      </ModalContextProvider>
    </div>
  )
}

export default App
