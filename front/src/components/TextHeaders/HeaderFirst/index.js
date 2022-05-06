import React from "react";
import { concatClasses, useDeviceType } from "../../Contexts/DeviceContext";

export default function HeaderFirst({children, className}) {
    return (
        <h1 className={concatClasses(`text-header first ${className}`, useDeviceType(), {m: 'mobile'})}>{children}</h1>
    )
}