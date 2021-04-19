import React from "react";
import Pages from "../../components/ContainerGraph/index";
import ItemsNewton from "../Items/ItemsRoot/ItemsNewtonRapson";
const NewtonRapson = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Pages title="Newton Rapson" Items={<ItemsNewton />} />
    </>
  );
};

export default NewtonRapson;
