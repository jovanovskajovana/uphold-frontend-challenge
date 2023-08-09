import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

test('renders hi there text', () => {
  render(<App />)
  const linkElement = screen.getByText(/hi there/i)
  expect(linkElement).toBeInTheDocument()
})
