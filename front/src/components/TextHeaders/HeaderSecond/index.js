import React from "react";
import { concatClasses, useDeviceType } from "../../Contexts/DeviceContext";

export default function HeaderSecond({children}) {
    return (
        <h2 className={concatClasses("text-header second", useDeviceType(), {m: 'mobile'})}>{children}</h2>
    )
}