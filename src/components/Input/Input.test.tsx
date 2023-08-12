import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from './Input'

jest.mock('lodash/debounce', () => (fn: (amount: number) => void) => fn)
console.warn = jest.fn()

describe('Input Component', () => {
  it('renders without errors', () => {
    render(<Input onInputChange={() => {}} />)
    const inputElement = screen.getByPlaceholderText('0.00')
    expect(inputElement).toBeInTheDocument()
  })

  it('handles input change', () => {
    const mockOnInputChange = jest.fn()
    render(<Input onInputChange={mockOnInputChange} />)
    const inputElement = screen.getByPlaceholderText('0.00')

    userEvent.type(inputElement, '12345')
    expect(inputElement).toHaveValue('12,345')

    expect(mockOnInputChange).toHaveBeenCalledWith(12345)
  })

  it('handles pasting non-numeric input', () => {
    const mockOnInputChange = jest.fn()
    render(<Input onInputChange={mockOnInputChange} />)
    const inputElement = screen.getByPlaceholderText('0.00')

    userEvent.paste(inputElement, 'abc')
    expect(inputElement).toHaveValue('')
    expect(mockOnInputChange).not.toHaveBeenCalled()
  })

  it('handles valid paste input', () => {
    const mockOnInputChange = jest.fn()
    render(<Input onInputChange={mockOnInputChange} />)
    const inputElement = screen.getByPlaceholderText('0.00')

    userEvent.paste(inputElement, '12345')
    expect(inputElement).toHaveValue('12,345')
    expect(mockOnInputChange).toHaveBeenCalledWith(12345)
  })

  it('handles debounced input change', async () => {
    const mockOnInputChange = jest.fn()
    render(<Input onInputChange={mockOnInputChange} />)
    const inputElement = screen.getByPlaceholderText('0.00')

    userEvent.type(inputElement, '12345')
    expect(inputElement).toHaveValue('12,345')

    // Wait for the debounce to complete
    await new Promise((resolve) => setTimeout(resolve, 400))

    expect(mockOnInputChange).toHaveBeenCalledWith(12345)
  })
})
