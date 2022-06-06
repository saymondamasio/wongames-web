import { Ribbon } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Ribbon',
  component: Ribbon
} as ComponentMeta<typeof Ribbon>

export const Default: ComponentStory<typeof Ribbon> = args => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#ccc'
    }}
  >
    <Ribbon {...args} />
  </div>
)

Default.args = {
  children: 'Best Seller'
}
