import { TextField } from "@mui/material";

const Input = (props) => {

    const { text, updateValue, value, type, validateData, error, helperText } = props;

    const handleChange = (e) => {
        const data = e.target.value
        updateValue({value : data, valid : validateData(data)});
    }

    return(
        <TextField
            required
            id="filled-basic" 
            type={type}
            label={text}
            variant="filled"
            value={value}
            error={error}
            helperText={helperText}
            onChange={ handleChange }
            onBlur={ handleChange }
        />
    )
}

export default Input;