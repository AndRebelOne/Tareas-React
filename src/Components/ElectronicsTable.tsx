import React from "react";
import { ElectronicsTableBody } from "./ElectronicsTableBody";
import ElectronicsTableHeader from "./ElectronicsTableHeader";

export type Electronics = {
    device: string;
    quantity: number;
    warranty: string;
}

export interface ElectronicsProps {
    electronics:Electronics[];
    removeDevice:(e:number) => void;
}

export const ElectronicsTable:React.FC<ElectronicsProps> = ({electronics, removeDevice}) => {


    return(
        <table>
            <ElectronicsTableHeader/>
            <ElectronicsTableBody electronics={electronics} removeDevice={removeDevice}/>
        </table>
    )
}