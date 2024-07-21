import React, { ReactNode } from "react";

export const getChildrenOnDisplayName = (children : ReactNode, displayName : string) =>
    React.Children.map(children, (child) => (
        // @ts-ignore
        child.type.name === displayName ? child : null
    ));