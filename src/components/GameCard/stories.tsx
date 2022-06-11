import { GameCard } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 244,90'
  }
} as ComponentMeta<typeof GameCard>

export const Default: ComponentStory<typeof GameCard> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithPromotion: ComponentStory<typeof GameCard> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithPromotion.args = {
  promotionalPrice: 'R$ 199,90'
}

export const WithRibbon: ComponentStory<typeof GameCard> = args => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'Best Seller',
  ribbonColor: 'primary',
  ribbonSize: 'small'
}
