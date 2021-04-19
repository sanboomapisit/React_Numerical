import React from 'react'
import ItemsLinear from "../Items/ItemsRegression/ItemsLinear";
import Pages from "../../components/ContainerGraph/index";
const Linear = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Linear Regression" Items={<ItemsLinear />} />
        </>
    )
}

export default Linear