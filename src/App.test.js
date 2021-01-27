import { render } from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByText(/learn react/i)
//   expect(linkElement).toBeInTheDocument()
// })

test('renders the correct content', () => {
  const { getByText } = render(<App />)
  expect(getByText('EveryMundo Flights')).not.toBeNull()
})
