import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Heading } from '.'

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a white heading', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'background-color',
      '#F231A5',
      {
        modifier: '::after'
      }
    )

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'height',
      '0.5rem',
      {
        modifier: '::after'
      }
    )
  })
})
