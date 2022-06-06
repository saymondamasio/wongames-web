import { Banner } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
} as ComponentMeta<typeof Banner>

export const Default: ComponentStory<typeof Banner> = args => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)

export const WithRibbon: ComponentStory<typeof Banner> = args => (
  <div
    style={{
      maxWidth: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'BestSeller',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
