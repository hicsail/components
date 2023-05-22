import { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Theme, Typography, useTheme, Container } from '@mui/material';
import { SxProps } from '@mui/system';
import { AutoCompleteInput, AutoCompleteOption } from '../stories/AutoComplete/AutoComplete';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import topMovies from './movie-options';


// console.log('movie 76: ',(topMovies[75]))
const isOptionEqualToValue = (option: AutoCompleteOption, value: AutoCompleteOption) => {
    if (option === null && value === null) {
      // Allow empty string as initial value
      return true;
    }
  
    if (option === null || value === null) {
      return false;
    }
  
    return option.value === value.value;
  };
const AutoCompletePage = () => {
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        movies: undefined
    })
    return (
        <Container
            component="main"
            maxWidth="sm"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}
        >

            <Box
                sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'100%'
                }}
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => {}}
                    
                >
                    <AutoCompleteInput
                        name='movies'
                        options={topMovies}
                        sx={{width:'600px'}}
                    />
                </Formik>
            </Box>
        </Container>
    ) 
}

export default AutoCompletePage;

  
  