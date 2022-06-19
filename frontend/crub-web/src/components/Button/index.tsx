import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick?: () => void;
    loading?: boolean;
    children?: React.ReactNode
}

function ButtonSubmit({onClick, type, children}: ButtonProps) {
    return (
        <Button variant="contained" color="primary" onClick={onClick} type={type}>
            {children}
        </Button>

    )
}

export default ButtonSubmit;