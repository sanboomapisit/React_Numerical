import React from "react";
// import  { Link } from 'react-router-dom';
// import {func as Func} from '../../services/service';
// import Graph from '../Graph'
import Items from "../Items/ItemsRoot/ItemsGraphical";
import Pages from "../../components/ContainerGraph/index";
const Graphical = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Pages title="Graphical" Items={<Items />} />
    </>
  );
};

export default Graphical;
