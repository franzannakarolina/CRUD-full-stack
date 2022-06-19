import { Button } from '@mui/material';
import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
}

function ButtonSubmit(props: ButtonProps){
    return (
        <Button variant="contained"
            color="primary"
            onClick={props.onClick}
        >
            {props.label}
        </Button>

    )
}

export default ButtonSubmit;