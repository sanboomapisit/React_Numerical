import React from "react";
import Pages from "../../components/ContainerGraph/index";
import ItemFalsePosition from "../Items/ItemsRoot/ItemsFalsePosition";
const FalsePosition = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Pages title="False Position" Items={<ItemFalsePosition />} />
    </>
  );
};

export default FalsePosition;
