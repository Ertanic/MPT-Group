import React from "react";
import HeaderItem from "./HeaderItem"
import {isTabletLandscapeOrGreaterDevice, useDeviceType} from '../Contexts/DeviceContext'
import Navmenu from "./Navmenu";

export default function Header({children}) {
    const dClasses = {m: 'mobile', t: 'tablet'}
    const device = useDeviceType()
    const child = React.Children.map(children, (child, index) => React.cloneElement(child, {
        key: index, 
        adaptive: {
            device: device, 
            classes: dClasses
        }
    }));

    if (isTabletLandscapeOrGreaterDevice(device)) {
        return <div className="header">{child}</div>
    }
    else {
        return <Navmenu adaptive={{device:device, classes: dClasses}}>{child}</Navmenu>
    }
}