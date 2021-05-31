import React from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ElectronicsTableHeader: React.FC = () => {
    return (
                <TableRow>
                    <TableCell>Device</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Warranty</TableCell>
                    <TableCell>CTA</TableCell>
                </TableRow>
    )
}

export default ElectronicsTableHeader;