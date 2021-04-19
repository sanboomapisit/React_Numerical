import React from 'react'
import Pages  from '../../components/ContainerGraph/index'
import Jacobi from "../Items/ItemsLinear/ItemsJacobi"
const JacobiIteration = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title='Jacobi Iteration' Items={<Jacobi/>}/>
        </>
    )
}

export default JacobiIteration
