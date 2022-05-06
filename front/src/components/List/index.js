import React from "react";

export default function List({children, className}) {
    return (
        <div className={className}>
            { React.Children.map(children, (child, i) => child && React.cloneElement(child, {key: i})) }
        </div>
    )
}