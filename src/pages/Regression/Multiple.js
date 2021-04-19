import React from 'react'
import ItemsMultiple from "../Items/ItemsRegression/ItemsMultiple";
import Pages from "../../components/ContainerGraph/index";
const Multiple = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Multiple linear Regression" Items={<ItemsMultiple />} />
            
        </>
    )
}

export default Multiple