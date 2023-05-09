import type { StoryObj } from '@storybook/react';
import { SubmitButton } from './SubmitButton';
import { withFormik } from '@bbbtech/storybook-formik'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  decorators: [withFormik],  
  title: 'Submit Button',
  component: SubmitButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {action : 'OnSubmit'}
  },
  parameters: {
    
  }
}
export default meta;
type Story = StoryObj<typeof meta>;



//still haven't figure out how to use formik decorators to give context in SubmitButton component
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Medium: Story = {
    args: {
      size: 'medium',
      label: 'Button',
    },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};


