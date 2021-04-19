import React from 'react'
import Pages  from '../../components/ContainerGraph/index'
import ItemsLUDecomposition from "../Items/ItemsLinear/ItemsLU_Decomposition";
const LuDecomposition = () => {
    window.scrollTo(0, 0);
    return (
        <> 
            <Pages title='LU Decomposition' Items={<ItemsLUDecomposition />}/>
        </>
    )
}

export default LuDecomposition
