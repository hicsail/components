import { SubmitButton } from '../stories/SubmitButton/SubmitButton'
import { FileUpload, CustomFile } from '../stories/FileUpload/FileUpload'
import { Form, Formik } from 'formik'
import {Box, Card, CardContent, CardHeader, Container} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const handleChange = async(files: CustomFile[]) => {
    const file = files[0];
    console.log('file: ', file)
    const reader = new FileReader();
    reader.onload = async(event) => {
        const fileContent = event.target?.result as string;
    };

    reader.readAsText(file);
    }

const acceptedFiles = {
    'text/csv': ['.csv'],
    'image/*': []
  } 

const FileUploadPage = () => {
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
                    initialValues={{primary: null}}
                    onSubmit={(values, actions) => {
                        actions.setSubmitting(true);
                        if(values.primary){
                            console.log('file is there')
                            actions.setSubmitting(false)
                        }
                    }}
                >
                    {({values}) => (
                        <Form>
                        <Card sx={{marginBottom:'16px'}}>  
                            <CardHeader title="Upload Your File Here!"/>
                            <CardContent sx={{'& > * + *': {marginTop:'10px'}}}>
                                <FileUpload
                                    name='primary'
                                    onChange={handleChange}
                                    value={values.primary}
                                    acceptedFileType={acceptedFiles}
                                />
                            </CardContent>
                        </Card>
                        <SubmitButton
                            label="Submit File"
                            sx={{justifySelf:'center', backgroundColor:'rgb(197, 219, 203)', height:'20%'}}
                            variant='outlined'
                            fullWidth
                        />
                    </Form>
                    )}
                    
                </Formik>
            </Box>
        </Container>
    )
}

export default FileUploadPage