import React, { useEffect, useState } from "react";
import "../../style.css";
// import MatrixInput from '../Matrix/Matrix_Input'
import { Linear } from '../../../services/service' 
import InputInterpolation from '../Matrix/inputInterpolation'

import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const axios = require('axios');
const ItemsItemsLinear = () => {
  const [size, setSize] = useState('');
  const [sizeInput, setSizeInput] = useState(0);
  const [Result, setResult] = useState([]);
  const [output, setOutput] = useState([]);
  let A =[];
  let ArrayFunction = [];
  let outputXfind = 0 ;
  let Xfind = 0 ;
  
  useEffect(()=>{
    ChangeSizeInput()
    
  })
  const ChangeSizeInput = ()=>{
      setSizeInput(parseInt(size));
      if(ArrayFunction.length > 0){
        for(let i = 0 ; i < sizeInput ; i++){
            document.getElementById(`inputX${i}`).value = ArrayFunction[i][0];
            document.getElementById(`inputFx${i}`).value = ArrayFunction[i][1];
        }
        document.getElementById(`inputXfind`).value = Xfind;
      }
  }
  const OnchangeSize = (e)=>{
    setSize(e.target.value)
  }
  const Calculate = () =>{
    ArrayFunction=[]
    A =[];
    let result = [];
    setResult([])
    if(sizeInput <= 10 && sizeInput > 1){
      for(let i = 0 ; i < sizeInput ; i++){
        A =[];
        A.push(parseFloat(document.getElementById(`inputX${i}`).value));
        A.push(parseFloat(document.getElementById(`inputFx${i}`).value));
        ArrayFunction.push(A);
      }
      Xfind = parseFloat(document.getElementById(`inputXfind`).value);
      result = Linear(ArrayFunction,Xfind);
      outputXfind = (result[0])*Xfind+(result[1]);
      setOutput(outputXfind.toFixed(8))
      setResult(result)
    }
    
  }
  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/LinearRegression")
      .then(function(response){
        setSize(response.data[0].size)
        setSizeInput(response.data[0].size);
        // await <InputInterpolation size={sizeInput}/>;
        let Exlem = response.data[0].Exlem ;
        let Xfindset = response.data[0].Xfindset ;
        for(let i = 0 ; i < Exlem.length ; i++){
          document.getElementById(`inputX${i}`).value = Exlem[i][0] ;
          document.getElementById(`inputFx${i}`).value = Exlem[i][1];
        }
        document.getElementById(`inputXfind`).value = Xfindset;
    })
    .catch(function(error){
        setSize('error');
        setSizeInput('error');
    })
  }
  return (
    <>
      <BodyContent>
        <ItemFrom>
          <ContainerInput>
              <label>size matrix</label><Input onChange={OnchangeSize} value={size}></Input>
              <InputInterpolation size={sizeInput}/>
            <div className='containerBtn'>
              <Button onClick={Calculate} >calculate</Button>
              <Button onClick={setExelample} style={{marginTop:'10px'}}>example</Button>
            </div>
          </ContainerInput>
        </ItemFrom>

        <ItemFrom>
          <ContainerInput>
            <label>Result</label>
            <table> 
              <thead><tr><th>C(0)</th><th>C(1)</th><th>{'X find'}</th></tr></thead>
              <tbody><tr><td>{Result[1]}</td><td>{Result[0]}</td><td>{output}</td></tr></tbody>
            </table>
          </ContainerInput>
            
        </ItemFrom>
      </BodyContent>
      
    </>
  );
};

export default ItemsItemsLinear;
