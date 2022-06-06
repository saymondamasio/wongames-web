import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps } from '.'

type WrapperProps = Omit<RibbonProps, 'children'>

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      filter: brightness(0.8);
      border-left-color: ${theme.colors[color]};
      border-top-color: ${theme.colors[color]};
    }
  `,
  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    right: -2rem;
    padding: 0 ${theme.spacings.small};
    font-size: ${theme.font.sizes.small};

    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    right: -1.5rem;
    padding: 0 ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xsmall};

    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: 1.6rem;

    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    display: flex;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
