import React from "react";
import Pages from "../../components/ContainerGraph/index";
import ItemsOnePoint from "../Items/ItemsRoot/ItemsOnePoint";
const OnePointIteration = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Pages title="False Position" Items={<ItemsOnePoint />} />
      <Pages title="One-Point Iteration" />
    </>
  );
};

export default OnePointIteration;
