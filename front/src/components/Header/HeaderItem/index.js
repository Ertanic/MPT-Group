import React from "react";
import {Link} from "react-router-dom";

import { concatClasses } from "../../Contexts/DeviceContext";

export default function HeaderItem({link, children, adaptive}) {
    return <Link to={link} className={concatClasses("header-item", adaptive.device, adaptive.classes)}>{children}</Link>;
}