import React from "react";
import Delimiter from "../Delimiter"
import HeaderFirst from "../TextHeaders/HeaderFirst"

export default function ContentBlock({header, children}) {
    return (
        <div className="content-block">
            <HeaderFirst>{header}</HeaderFirst>
            <Delimiter/>
            {React.Children.map(children, (child) =>
                    <React.Fragment>{child}</React.Fragment>)}
        </div>
    )
}