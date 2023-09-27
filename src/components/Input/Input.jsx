import { TextField } from "@mui/material";

const Input = (props) => {

    const { text, updateValue, value, type } = props;

    const handleChange = (e) => {
        updateValue(e.target.value);
    }

    return(
        <TextField
            required
            id="filled-basic" 
            type={type}
            label={text}
            variant="filled"
            value={value}
            onChange={ handleChange }
        />
    )
}

export default Input;