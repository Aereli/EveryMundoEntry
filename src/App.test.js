import { render, screen } from '@testing-library/react'
import App from './App'
import Cards from './components/Cards'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test('renders the correct content', () => {
  const { getByText } = render(<App />)
  // expect(getByText('EveryMundo Flights')).not.toBeNull()
  expect(getByText('flightResults')).toBeNull()
})

// test('renders the correct content', () => {
//   const { getByText } = render(<Cards />)
//   // expect(getByText('EveryMundo Flights')).not.toBeNull()
//   expect(getByText('modalToggle')).not.toBeTruthy()
// })
