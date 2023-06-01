import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { useFormikContext } from 'formik';


interface SubmitButtonProps extends LoadingButtonProps{

  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}


export const SubmitButton = ({
    size = 'medium',
    backgroundColor,
    label,
    ...props
}:SubmitButtonProps) => {
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
