import { useState } from 'react'

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const toggle = () => setModalOpen(!modalOpen)
  // const [toggle, setToggle] = useState(false)

  return [modalOpen, setModalOpen, toggle]

  // const useModalWithData = (initialMode = false, initialSelected = null) => {
  //   const [modalOpen, setModalOpen] = useModal(initialMode)
  //   const [selected, setSelected] = useState(initialSelected)
  //   const setModalState = (state) => {
  //     setModalOpen(state)
  //     if (state === false) {
  //       setSelected(null)
  //     }
  //   }
  // return { modalOpen, setModalOpen, selected, setSelected, setModalState }
}

export default useModal
