import Logo from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

export const Default: ComponentStory<typeof Logo> = args => <Logo {...args} />
