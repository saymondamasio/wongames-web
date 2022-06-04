import { Button } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = args => (
  <Button {...args} />
)

Default.args = {
  children: 'Buy now'
}

export const WithIcon: ComponentStory<typeof Button> = args => (
  <Button {...args} />
)

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
