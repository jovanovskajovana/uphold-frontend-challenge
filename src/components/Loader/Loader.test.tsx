import { render, screen } from '@testing-library/react'

import Loader from './Loader'

describe('Loader Component', () => {
  it('renders without errors', () => {
    render(<Loader />)
    const loaderElement = screen.getByTestId('loader')
    expect(loaderElement).toBeInTheDocument()
  })

  it('renders inner loader element', () => {
    render(<Loader />)
    const loaderInnerElement = screen.getByTestId('loader-inner')
    expect(loaderInnerElement).toBeInTheDocument()
  })
})
