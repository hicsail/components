import type { Meta, StoryObj } from '@storybook/react';
import { AutoCompleteInput } from './AutoComplete';
import { withFormik } from '@bbbtech/storybook-formik';

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

const topMovies = [
    { label: 'The Shawshank Redemption', value: 'The Shawshank Redemption' },
    { label: 'The Godfather', value: 'The Godfather' },
    { label: 'The Godfather: Part II', value: 'The Godfather: Part II' },
    { label: 'The Dark Knight', value: 'The Dark Knight' },
    { label: '12 Angry Men', value: '12 Angry Men' },
    { label: 'Schindler\'s List', value: 'Schindler\'s List' },
    { label: 'The Lord of the Rings: The Return of the King', value: 'The Lord of the Rings: The Return of the King' },
    { label: 'Pulp Fiction', value: 'Pulp Fiction' },
    { label: 'The Good, the Bad and the Ugly', value: 'The Good, the Bad and the Ugly' },
    { label: 'Fight Club', value: 'Fight Club' },
    { label: 'The Lord of the Rings: The Fellowship of the Ring', value: 'The Lord of the Rings: The Fellowship of the Ring' },
    { label: 'Forrest Gump', value: 'Forrest Gump' },
    { label: 'Inception', value: 'Inception' },
    { label: 'The Lord of the Rings: The Two Towers', value: 'The Lord of the Rings: The Two Towers' },
    { label: 'Star Wars: Episode V - The Empire Strikes Back', value: 'Star Wars: Episode V - The Empire Strikes Back' },
    { label: 'The Matrix', value: 'The Matrix' },
    { label: 'Goodfellas', value: 'Goodfellas' },
    { label: 'One Flew Over the Cuckoo\'s Nest', value: 'One Flew Over the Cuckoo\'s Nest' },
    { label: 'Seven Samurai', value: 'Seven Samurai' },
    { label: 'Se7en', value: 'Se7en' },
  ];

export const Primary: Story = {
    args: {
        name: 'primary-text-input',
        options: topMovies,
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
