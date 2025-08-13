import React, { FC } from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Button: FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
