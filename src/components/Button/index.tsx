import { HTMLAttributes, ReactNode } from 'react'
import * as S from './styles'

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
}

export const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...rest
}: ButtonProps) => (
  <S.Wrapper {...rest} size={size} fullWidth={fullWidth} hasIcon={!!icon}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)
