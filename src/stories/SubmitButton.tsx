import React , {FC} from 'react';
import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { useFormikContext } from 'formik';


interface SubmitButtonProps extends LoadingButtonProps{
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const SubmitButton = ({
    size = 'medium',
    backgroundColor,
    label,
    ...props
}:SubmitButtonProps) => {
    // remove empty curly brackets once formik context has been added on stories
  const { isSubmitting } = useFormikContext<any>();
  return (
    <LoadingButton
        type="submit"
        loading={isSubmitting}
        disabled={isSubmitting}
        size={size}
        style={{ backgroundColor }}
        {...props}
    >
        {label}
    </LoadingButton>
  );
};
