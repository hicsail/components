import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, CustomFile, FileUploadProps } from './FileUpload';
import { withFormik } from '@bbbtech/storybook-formik';
import React, {useState} from 'react';

const meta = {
    decorators: [withFormik],
    title: 'File Upload',
    component: FileUpload,
    tags: ['autodocs'],
    argTypes:{
        title:{
            default: 'Default Title'
        },
        caption:{
            default: 'Default Caption'
        },
        error:{
           default: false,
           
        },
        value:{
            preview: {
                default: 'Default Preview'
            }
        }
    }
}satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

const errorFunc: (file:CustomFile) => boolean = (file) => {
    console.log('file error type: ', file);

    return file.type === 'text/csv';

}
const [error, setError] = useState(false);

export const Primary: Story = {
    
    args: {
        onChange: (file) => {console.log((file[0].type))},
        title: 'New Title',
        caption: 'Not all files are accepted. Only CSV for now',
        error: true
    }
}
