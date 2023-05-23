import { PasswordInput } from '../stories/PasswordInput/PasswordInput'
import { SubmitButton } from '../stories/SubmitButton/SubmitButton'
import { TextInput } from '../stories/TextInput'
import { Form, Formik } from 'formik'
import {Box, Card, CardContent, CardHeader, Container} from '@mui/material'
import { useNavigate } from 'react-router-dom'



const LoginPage = () => {
    const navigate = useNavigate();
    return (
        <Container
            component="main"
            maxWidth="sm"
            sx={{
            display: 'flex',
            justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width:'100%',
                }}
            >
             <Formik
                    initialValues={{password: '', username:''}}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true)
                        setTimeout(() => {
                            actions.setSubmitting(false);
                            if( values.password !== 'admin' || values.username !== 'admin'){
                                actions.setFieldError('password','Wrong password');
                                actions.setFieldError('username','Wrong username');
                            }else{
                                navigate('/movies');
                            }
                        },2000)
                    }}
                >
                    <Form>
                        <Card sx={{marginBottom:'16px'}}>  
                            <CardHeader title="Sign In"/>
                            <CardContent sx={{'& > * + *': {marginTop:'10px'}}}>
                                    <TextInput
                                        autoFocus
                                        label={'Username'}
                                        sx={{mx:'normal', marginBottom:'16px'}}
                                        fullWidth
                                        name='username'
                                    />
                                    <PasswordInput
                                        sx={{ label:{color: 'black'}, backgroundColor:{color: 'white'}}}
                                        fullWidth
                                    />
                                </CardContent>
                        </Card>
                        <SubmitButton
                            label="Sign In"
                            sx={{justifySelf:'center', backgroundColor:'rgb(197, 219, 203)', height:'20%'}}
                            variant='outlined'
                            fullWidth
                        />
                    </Form>
                </Formik>
            </Box>
        </Container>
    )
}

export default LoginPage;