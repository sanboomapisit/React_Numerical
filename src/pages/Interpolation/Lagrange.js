import React from 'react'
import ItemsLagrange from "../Items/ItemsInterpolation/ItemsLagrange";
import Pages from "../../components/ContainerGraph/index";
const Lagrange = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Lagrange Polynomial" Items={<ItemsLagrange />} />
        </>
    )
}

export default Lagrange