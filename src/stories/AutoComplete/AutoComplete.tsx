import { FC, useState } from 'react';
import { Autocomplete, FormControl, TextField, TextFieldProps } from '@mui/material';
import { useFormikContext } from 'formik';

export interface AutoCompleteOption {
    label: string;
    value: string;
  }
  
  export interface AutoCompleteInputProps {
    name: string;
    options: AutoCompleteOption[];
  }
  


  const getOptionLabel = (option:AutoCompleteOption) => {    
    return (option.label)  || 'None'
  }
  export const AutoCompleteInput: FC<AutoCompleteInputProps & TextFieldProps> = (props) => {
    const { handleChange, handleBlur, values, touched, errors, isSubmitting } = useFormikContext<any>();    
    console.log(values[props.name]);
    return (
      <FormControl variant={props.variant} fullWidth={props.fullWidth}>
        <Autocomplete
          options={props.options}
          renderInput={(params: any) => (
            <TextField {...props} {...params} error={!!errors[props.name]} helperText={(touched[props.name] && errors[props.name]) as string} InputLabelProps={{ shrink: true }} label='Autocomplete' />
          )}
          onChange={(event, value) => {
            handleChange({ target: { name: props.name, value: value?.value } });
          }}
          onBlur={handleBlur}
          value={values[props.name]}
          getOptionLabel={getOptionLabel}
          disabled={props.disabled || isSubmitting}
          sx={{width:'600px'}}
        />
      </FormControl>
    );
  };