import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading
} as ComponentMeta<typeof Heading>

export const Default: ComponentStory<typeof Heading> = args => (
  <Heading {...args} />
)

Default.args = {
  children: 'Most Popular'
}
