import { FC, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Theme, Typography, useTheme } from '@mui/material';
import { SxProps } from '@mui/system';
import { useFormikContext } from 'formik';

export interface CustomFile extends File {
  preview?: string;
}

// following the example react-dropzone provided in their documentation
// https://react-dropzone.org/#!/Accepting%20specific%20file%20types
type FileTypeMap = {
  [mimeType: string]: string[];
};

export interface FileUploadProps {
  name: string;
  title?: string;
  caption?: string;
  error?: boolean;
  value?: CustomFile | null;
  onChange: (file: CustomFile[]) => void;
  multiple?: boolean;
  sx?: SxProps<Theme>;
  acceptedFileType: FileTypeMap
}

export const FileUpload: FC<FileUploadProps> = (props) => {
  const theme = useTheme();
  const { setFieldValue } = useFormikContext<any>();

  const handleDrop = useCallback((acceptedFiles: CustomFile[]) => {
    props.onChange(acceptedFiles);
    setFieldValue(props.name, acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop: handleDrop,
    multiple: props.multiple,
    accept: props.acceptedFileType
  });

  useEffect(
    () => () => {
      if (props.value?.preview) {
        URL.revokeObjectURL(props.value.preview);
      }
    },
    [props.value]
  );
  return (
    <div {...getRootProps()} data-cy="dropzone">
      <Box
        sx={{
          outline: 'none',
          display: 'flex',
          overflow: 'hidden',
          textAlign: 'center',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: theme.spacing(5, 0),
          borderRadius: 2,
          transition: theme.transitions.create('padding'),
          backgroundColor: theme.palette.background.default,
          border: `1px dashed ${theme.palette.grey['500']}`,
          '&:hover': {
            opacity: 0.72,
            cursor: 'pointer'
          },
          [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            flexDirection: 'row'
          },
          width: '100%',
          ...(isDragActive && { opacity: 0.72 }),
          ...((isDragReject || props.error) && {
            color: 'error.main',
            borderColor: 'error.light',
            bgcolor: 'error.lighter'
          }),
          ...props.sx
        }}
      >
        <input {...getInputProps()} />
        <Box sx={{ p: 3, ml: { md: 2 } }}>
          <Typography gutterBottom variant="h5" textAlign="center">
            {props.title || 'Drop or Select file'}
          </Typography>

          {props.caption ? (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.caption}
            </Typography>
          ) : (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Drop files here or click&nbsp;
              <Typography variant="body2" component="span" sx={{ color: 'primary.main' }}>
                browse
              </Typography>
              &nbsp;through your machine
            </Typography>
          )}
        </Box>
      </Box>
    </div>
  );
};
