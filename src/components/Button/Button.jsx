import React from "react";
import { Button } from "@mui/material";

const Btn = (props) => {

    const { text, color, func } = props

    return(
        <Button size="medium" variant="contained" color={color} onClick={func}>{text}</Button>
    )
}

export default Btn;