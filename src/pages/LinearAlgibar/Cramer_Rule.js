import React from 'react'
import ItemsCramerRule from "../Items/ItemsLinear/ItemsCramerRule";
import Pages from "../../components/ContainerGraph/index";
const Cramer_Rule = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Cramer Rule" Items={<ItemsCramerRule />} />
        </>
    )
}

export default Cramer_Rule
