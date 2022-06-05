import { Footer } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
