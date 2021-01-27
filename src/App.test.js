import { render, fireEvent } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

//Testing is my weakest value as I have 0 experience in it except for school with rspec on Ruby

test('renders the correct content', () => {
  const { getByText } = render(<App />)
  expect(getByText('EveryMundo Flights')).not.toBeNull()
})
