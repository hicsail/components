import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, CustomFile } from './FileUpload';
import { withFormik } from '@bbbtech/storybook-formik';

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

const handleChange = async(files: CustomFile[]) => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = async(event) => {
        const fileContent = event.target?.result as string;
    };

    reader.readAsText(file);
    }
export const Primary: Story = {
    
    args: {
        onChange: (files) => {handleChange(files)},
        name: 'file-upload',
        title: 'New Title',
        caption: 'Not all files are accepted. Only CSV for now',
        error: false,
        multiple: true,
        acceptedFileType:{
            'text/csv': ['.csv']
          } 
    }
}
