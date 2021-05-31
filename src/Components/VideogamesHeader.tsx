import {TableCell, TableRow } from "@material-ui/core";
import React from "react";

export const VideogamesHeader: React.FC = () => {
    return (
        <TableRow id="videogames-header">
            <TableCell>Name</TableCell>
            <TableCell>Console</TableCell>
            <TableCell>Quantity</TableCell>
        </TableRow>
    )

}