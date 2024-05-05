import React from "react";
import { ColorCard } from "../colors";

export const ColorPalet = ({paletArray ,onClick}) => {

    // console.log(paletArray);
    return <div className=" d-flex flex-wrap gap-3 p-3 w-50 bg-secondary rounded-3  justify-content-center ">
        {paletArray.map((color, index) => <ColorCard className={"w-25 fs-5 h-25"} onClick={()=>onClick(color.colorcode)} key={index+color.colorcode} colorcode={color.colorcode} /> )}
        </div>;
};

