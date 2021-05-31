import React from "react";
import {ElectronicsProps, Electronics} from "./ElectronicsTable";
import TableRow from '@material-ui/core/TableRow';
import { Button, TableCell } from "@material-ui/core";

interface ElectronicsBodyProps extends ElectronicsProps{
    // handler: (e:string) => void;
}

export const ElectronicsTableBody: React.FC<ElectronicsBodyProps> = ({electronics, removeDevice}) => {
    return <tbody>
            {electronics.map((electronic:Electronics, index) => {
                return (
                    <TableRow key={electronic.device}>
                        <TableCell>{electronic.device}</TableCell>
                        <TableCell>{electronic.quantity}</TableCell>
                        <TableCell>{electronic.warranty}</TableCell>
                        <TableCell><Button variant="contained" color="primary" onClick={()=>removeDevice(index)}>Remove this device</Button></TableCell>
                    </TableRow>
                );
            })}
        </tbody>
};