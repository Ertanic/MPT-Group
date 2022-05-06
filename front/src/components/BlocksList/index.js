import React from "react";
import { concatClasses, useDeviceType } from "../Contexts/DeviceContext";
import List from "../List";

export default function BlocksList({children}) {
    const device = useDeviceType()

    return <List className={concatClasses('blocks-list', device)}>{children}</List>
}