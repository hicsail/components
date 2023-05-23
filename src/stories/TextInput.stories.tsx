import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { withFormik } from '@bbbtech/storybook-formik';

const meta = {
    decorators: [withFormik],
    title: 'Text Input',
    component: TextInput,
    tags: ['autodocs'],
    argTypes:{
        label: {
            default: ''
        }
    }
}satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        name: 'primary-text-input',
        label: 'Primary Label'
    }
}
Primary.parameters = {
    formik: {
        initialValues: {
            [Primary.args.name]: '' 
        }
    }
}