import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Reactlib } from './reactlib';

export default {
  component: Reactlib,
  title: 'Reactlib',
} as ComponentMeta<typeof Reactlib>;

const Template: ComponentStory<typeof Reactlib> = (args) => (
  <Reactlib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
