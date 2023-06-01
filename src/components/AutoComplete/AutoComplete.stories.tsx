import type { Meta, StoryObj } from '@storybook/react';
import { AutoCompleteInput } from './AutoComplete';
import { withFormik } from '@bbbtech/storybook-formik';
import topMovies from '../../pages/movie-options';

const meta = {
    decorators: [withFormik],
    title: 'Autocomplete Input',
    component: AutoCompleteInput,
    tags: ['autodocs'],
    argTypes:{
        name: {
            default: ''
        },
        options: {
            default: undefined
        }
    }
}satisfies Meta<typeof AutoCompleteInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const topMoviesOption = topMovies.slice(0,10);

export const Primary: Story = {
    args: {
        name: 'primary-text-input',
        options: topMoviesOption,
        sx: {width:'600px'}
    }
}
Primary.parameters = {
    formik: {
        initialValues: {
             [Primary.args.name]: {label: '', value: ''}
        }
    }
}
