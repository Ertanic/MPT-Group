import React from "react";

import { isMobileDevice, useDeviceType } from "../Contexts/DeviceContext";

import BigLogo from "../../assets/Logo.jpg"
import SmallLogo from "../../assets/Logo_mobile.jpg"

export default function Logo() {
    const device = useDeviceType()

    return isMobileDevice(device) ? (
        <img className="logo" src={SmallLogo} alt="BashirGroup Logo"></img>
    ) : (
        <img className="logo" src={BigLogo} alt="BashirGroup Logo"></img>
    )
}