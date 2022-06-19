import { TextField } from '@mui/material';

interface InputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
}

function Input(props: InputProps) {
    return (
        <TextField
            label={props.label}
            value={props.value}
            onChange={props.onChange}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}

export default Input;