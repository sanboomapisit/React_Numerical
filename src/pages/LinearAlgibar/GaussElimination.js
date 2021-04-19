import React from 'react'
import Pages  from '../../components/ContainerGraph/index'
import ItemsGaussElimination from "../Items/ItemsLinear/ItemsGaussElimination";
const GaussElimination = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Gauss Elimination" Items={<ItemsGaussElimination />} />
            {/* <Pages title='Gauss Elimination'/> */}
        </>
    )
}

export default GaussElimination
