import React, { useContext } from "react";

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { GenreContext } from "../../context/GenreContext";

const BasicTable = () => {

    const { genres } = useContext(GenreContext);

    // const { genre, descGenre } = genres;

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Género</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Editar</TableCell>
                        <TableCell>Eliminar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {genres.map((genre) => (
                        <TableRow
                            key={genre.genre}
                        >
                            <TableCell>{genre.genre}</TableCell>
                            <TableCell>{genre.descGenre}</TableCell>
                            <TableCell>Btn editar</TableCell>
                            <TableCell>Btn eliminar</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BasicTable;