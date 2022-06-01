import Main from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Titulo padrão',
    description: 'TypeScript, ReactJS, NextJS e Styled Components'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = args => <Main {...args} />

export const Default: ComponentStory<typeof Main> = args => <Main {...args} />
