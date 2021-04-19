import React from 'react'
import ItemsPolynomial from "../Items/ItemsRegression/ItemsPolynomial";
import Pages from "../../components/ContainerGraph/index";
const Polynomial = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Polynomial Regression" Items={<ItemsPolynomial/>} />
        </>
    )
}

export default Polynomial