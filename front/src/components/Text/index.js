import React from "react";
import { concatClasses, useDeviceType } from "../Contexts/DeviceContext";

export default function Text({children, points}) {
    return (
        <p className={concatClasses(`text ${points ? 'points' : ''}`, useDeviceType(), {m: 'mobile'})}>{React.Children.map(children, (child) =>
            <React.Fragment>{child}</React.Fragment>)}</p>
    )
}