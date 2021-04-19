import Desmos from "desmos";
import React, { useEffect } from "react";

const Graph = ({ fx = "" }) => {
  useEffect(() => {
    const elt = document.querySelector("#rrt");
    elt.style.width = "440px";
    elt.style.height = "600px";
    const calculator = Desmos.GraphingCalculator(elt,
      { expressions: false,autosize: false,backgroundColor:'#ececec',textColor:'#f5c130' },
    );
    calculator.setMathBounds({
      left: -30,
      right: 30,
      bottom: -30,
      top: 30,
    });
    calculator.setExpression({ id: "graph1", latex: fx });
    document.getElementsByClassName("dcg-graphpaper-branding")[0].style.display = 'none';
    return () => {
      calculator.destroy();
    };
  }, [fx]);
  return <div id="rrt"></div>;
};

export default Graph;
