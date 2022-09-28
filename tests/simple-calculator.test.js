import { render, fireEvent } from '@testing-library/react'
import React from 'react'
import SimpleCalculator from '../components/simple-calculator'

it('renders correctly', () => {
  const { queryByTestId } = render(<SimpleCalculator />)

  expect(queryByTestId('title')).toBeTruthy()
  expect(queryByTestId('output')).toBeTruthy()
  expect(queryByTestId('input-one')).toBeTruthy()
  expect(queryByTestId('input-two')).toBeTruthy()
  expect(queryByTestId('reset-button')).toBeTruthy()
})

describe('Input 1 & 2 value', () => {
  it('updates on change', () => {
    const { queryByTestId } = render(<SimpleCalculator />)

    const inputOne = queryByTestId('input-one')
    const inputTwo = queryByTestId('input-two')

    fireEvent.change(inputOne, { target: { value: '123' } })
    fireEvent.change(inputTwo, { target: { value: '-321' } })

    expect(inputOne?.value).toBe('123')
    expect(inputTwo?.value).toBe('-321')
  })
})

describe('Output value', () => {
  it('show sum on two inputs change', () => {
    const { queryByTestId } = render(<SimpleCalculator />)

    const output = queryByTestId('output')
    const inputOne = queryByTestId('input-one')
    const inputTwo = queryByTestId('input-two')

    fireEvent.change(inputOne, { target: { value: '-5' } })
    fireEvent.change(inputTwo, { target: { value: '10' } })

    expect(output?.innerHTML).toBe('5')
  })
})
