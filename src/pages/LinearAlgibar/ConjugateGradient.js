import React from 'react'
import Pages  from '../../components/ContainerGraph/index'
import ItemsConjugate from '../Items/ItemsLinear/ItemConjugate'
const ConjugateGradient = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title='Conjugate Gradient' Items={<ItemsConjugate/>}/>
        </>
    )
}

export default ConjugateGradient
