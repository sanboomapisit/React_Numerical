import React from 'react'
import ItemsNewtonDivided from "../Items/ItemsInterpolation/ItemsNewton";
import Pages from "../../components/ContainerGraph/index";
const NewtonDivided = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Newton's Divided Differences" Items={<ItemsNewtonDivided />} />
        </>
    )
}

export default NewtonDivided