import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nextlib } from './nextlib';

export default {
  component: Nextlib,
  title: 'Nextlib',
} as ComponentMeta<typeof Nextlib>;

const Template: ComponentStory<typeof Nextlib> = (args) => (
  <Nextlib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
