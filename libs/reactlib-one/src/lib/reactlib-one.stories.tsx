import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactlibOne } from './reactlib-one';

export default {
  component: ReactlibOne,
  title: 'ReactlibOne',
} as ComponentMeta<typeof ReactlibOne>;

const Template: ComponentStory<typeof ReactlibOne> = (args) => (
  <ReactlibOne {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
