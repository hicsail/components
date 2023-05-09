import { FC, useState } from 'react';
import { IconButton, InputAdornment, FormControl, TextField, TextFieldProps, FormHelperText } from '@mui/material';
import { useFormikContext } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type TextInputProps = TextFieldProps & 
{
    min?: number,
    max?: number,
    regex?: string,
    signup?: boolean 

}
const TextInput: FC<TextInputProps> = ({
    signup = false,
    ...props
}) => {
    const { handleChange, handleBlur, values, touched, errors, isSubmitting} = useFormikContext<any>();
    const name = 'password';
    const validRegex = props.regex ? new RegExp(props.regex) : /  /;
    var helperTextStr;
    
    
    if(signup && touched[name] && values[name]){
        if((props.min && values[name].length < props.min) || (props.max && values[name].length > props.max) || (validRegex && !validRegex.test(values[name]))){
            // password doesn't fit the parameters given (i.e length, pattern of regex)
            helperTextStr = 'Please enter a valid password'
        }
    }
    
    
    return(
        <FormControl variant={props.variant} fullWidth={props.fullWidth}>
            <TextField
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[name]}
                disabled={props.disabled || isSubmitting}
                error={!!errors[name]}
                helperText={helperTextStr} 
                required
                label="Password"  
                placeholder="Password"
            >
            </TextField>
        </FormControl>
    );
}

export const PasswordInput: FC<TextInputProps> = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const { isSubmitting } = useFormikContext<any>();
    return (
        <TextInput
            {...props}
            name='password'
            type={!isSubmitting && showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            disabled={isSubmitting}
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(event) => {event.preventDefault}}
                            edge="end"
                        >
                            {!isSubmitting && showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        
        />        
    );
}

