import React from "react";

function AutoMap(children) {
    return Array.isArray(children) 
    ? React.Children.map(children, (child, i) => React.cloneElement(child, {key: i}) ) 
    : children;
}

function Map(children, callback) { 
    return Array.isArray(children) 
        ? React.Children.map(children, (child) => React.cloneElement(child, {key: callback() }) ) 
        : children;
}

export { Map, AutoMap };