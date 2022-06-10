import { Highlight } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Highlight',
  component: Highlight
} as ComponentMeta<typeof Highlight>

export const Default: ComponentStory<typeof Highlight> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

Default.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/link',
  backgroundImage: '/img/read-dead-img.png'
}

export const WithFloatImage: ComponentStory<typeof Highlight> = args => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: '/link',
  backgroundImage: '/img/read-dead-img.png',
  floatImage: '/img/read-dead-float.png'
}
