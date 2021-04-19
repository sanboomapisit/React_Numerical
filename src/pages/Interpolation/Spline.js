import React from 'react'
import ItemsSpline from "../Items/ItemsInterpolation/ItemsSpline";
import Pages from "../../components/ContainerGraph/index";
const Spline = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Pages title="Spline interpolation" Items={<ItemsSpline />} />
        </>
    )
}

export default Spline