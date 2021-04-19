import React from "react";
import Pages from "../../components/ContainerGraph/index";
import ItemsSecant from "../Items/ItemsRoot/ItemsSecantMethod";
const SecantMethod = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Pages title="Secant Method" Items={<ItemsSecant />} />
    </>
  );
};

export default SecantMethod;
