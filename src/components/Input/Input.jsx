import { TextField } from "@mui/material";

const Input = (props) => {

    const { text, updateValue } = props;

    const handleChange = (e) => {
        updateValue(e.target.value);
    }

    return(
        <TextField
            id="filled-basic" 
            label={text}
            variant="filled"
            onChange={ handleChange }
        />
    )
}

export default Input;