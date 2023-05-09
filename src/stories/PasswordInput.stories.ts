import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';
import { withFormik } from '@bbbtech/storybook-formik';

const meta = {
    decorators: [withFormik],
    title: 'Password Input',
    component: PasswordInput,
    tags: ['autodocs'],
    argTypes:{
        min: {
            description: 'Optional. Minimum characters the password. Only used when field is for a signup',
            default: 1
        },
        max: {
            description: 'Optional. Maximum characters the password. Only used when field is for a signup',
            default: 8
            },
        regex: {
            description: 'Optional. RegExp pattern for secure password. Only used for signup',
            control: {
                type: 'text'
            },
            default: ''
        },
        signup: {
            description: 'Determining if a form is for sign-up password input',
            default: false
            }

    },
    parameters: {
        formik: {
            initialValues: {
                password: ''
            }
        }
    }

} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        min: 1,
        max: 8,
        signup: false,
        regex: ""
    }
}