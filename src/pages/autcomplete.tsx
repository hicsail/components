import { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { SubmitButton } from '../stories/SubmitButton/SubmitButton';
import { AutoCompleteInput } from '../stories/AutoComplete/AutoComplete';
import { Formik, Form,  } from 'formik';
import topMovies from './movie-options';
import { useNavigate } from 'react-router-dom';

const AutoCompletePage = () => {
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        movies: {label: '', value: ''}
    });


    return (
        <Container
            component="main"
            maxWidth="xl"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white'
            }}
        >
            <Box
                sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'100%',
                marginBottom:'30px'
                }}
            >
                <Typography sx={{color:'black', justifySelf:'center', fontSize:40}} variant='h1'>Top 100 movies available</Typography>
                <Typography sx={{color:'black', justifySelf:'center', marginBottom: '10px', fontSize:30}} variant='h2'>Movie picked: {initialValues.movies.label}</Typography>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        setInitialValues({movies: {label: values.movies.label, value: values.movies.value}})
                        setTimeout(() => {
                            navigate('/fileUpload')
                        }, 1000)
                    }}

                >
                    <Form
                        style={{alignItems:'self-end'}}
                    >
                        <AutoCompleteInput
                            name='movies'
                            options={topMovies}
                            sx={{width:'600px', margin:'20px'}}
                            label='Find Movie'
                        />

                        <SubmitButton
                            label='Pick Movie'
                            sx={{backgroundColor:'#B6EF7D', marginTop:'25px'}}

                        />
                    </Form>

                </Formik>
            </Box>
        </Container>
    )
}

export default AutoCompletePage;


