import React from "react";
import {VideogamesHeader} from "./VideogamesHeader";
import {VideogamesBody} from "./VideogamesBody";

export type Videogames = {
    name: string;
    console: string;
    quantity: number;
}

export interface VideogamesProps {
    videogames:Videogames[];
}

export const VideogamesTable:React.FC<VideogamesProps> = ({videogames}) => {
  
    return(
        <table>
            <VideogamesHeader/>
            <VideogamesBody videogames={videogames}/>
        </table>
    )
}