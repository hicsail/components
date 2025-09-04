import type { Meta, StoryObj } from '@storybook/react';
import { Chat } from './Chat';

const meta = {
  title: 'Chat',
  component: Chat
} satisfies Meta<typeof Chat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopUp: Story = {
  args: {
    type: 'pop-up',
    color: 'primary',
    apiUrl: 'https://your-api-url.com/chat'
  }
};

export const Panel: Story = {
  args: {
    type: 'panel',
    color: 'primary',
    apiUrl: 'https://your-api-url.com/chat'
  }
};
