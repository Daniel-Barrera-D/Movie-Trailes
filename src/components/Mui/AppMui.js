import React from "react";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

export const AppMui = ({children}) => {

    const theme = createTheme({
        palette:{
            mode:'dark'
        }
    })
    
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}