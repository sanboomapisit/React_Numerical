import React from 'react'
import Pages  from '../../components/ContainerGraph/index'
import ItemsGaussJordan from "../Items/ItemsLinear/ItemsGaussJordan";
const GaussJordan = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Gauss Jordan" Items={<ItemsGaussJordan />} />
        </>
    )
}

export default GaussJordan
