import React from "react";
import Pages from "../../components/ContainerGraph/index";
import ItemsBisection from "../Items/ItemsRoot/ItemsBisection";
const BisectionMethod = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Pages title="Bisection Method" Items={<ItemsBisection />} />
    </>
  );
};

export default BisectionMethod;
