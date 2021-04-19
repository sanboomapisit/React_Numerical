import React from 'react'
import Pages  from '../../components/ContainerGraph/index'
import ItemsGaussSeidel from "../Items/ItemsLinear/ItemsGaussSeidel"
const GaussSeidelIteration = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title='GaussSeidel Iteration' Items={<ItemsGaussSeidel/>}/>  
        </>
    )
}

export default GaussSeidelIteration;
