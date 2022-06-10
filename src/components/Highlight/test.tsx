import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Highlight } from '.'

import * as S from './styles'

const props = {
  title: 'Heading',
  subtitle: 'Subtitle',
  buttonLabel: 'Buy now',
  buttonLink: '/link',
  backgroundImage: '/img/rd.png'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /subtitle/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'float-image content'"
    })

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyle({
      'grid-template-areas': "'content float-image'"
    })

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })
  })
})
