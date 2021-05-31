import React from "react";
import {TableCell, TableRow } from "@material-ui/core";
import { Videogames, VideogamesProps } from "./VideogamesTable";

interface VideogamesBodyProps extends VideogamesProps{
    // handler: (e:string) => void;
}

export const VideogamesBody: React.FC<VideogamesBodyProps> = ({videogames}) => {
    return <tbody>
            {videogames.map((videogame:Videogames, index) => (
                <TableRow key={videogame.name}>
                    <TableCell>{videogame.name}</TableCell>
                    <TableCell>{videogame.console}</TableCell>
                    <TableCell>{videogame.quantity}</TableCell>
                </TableRow>
            ))}
        </tbody>
};