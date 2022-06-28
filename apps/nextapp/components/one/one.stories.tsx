import { ComponentStory, ComponentMeta } from '@storybook/react';
import { One } from './one';

export default {
  component: One,
  title: 'One',
} as ComponentMeta<typeof One>;

const Template: ComponentStory<typeof One> = (args) => <One {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
