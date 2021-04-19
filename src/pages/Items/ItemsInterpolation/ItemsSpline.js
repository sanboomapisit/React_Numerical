import React, { useEffect, useState } from "react";
import "../../style.css";
// import MatrixInput from '../Matrix/Matrix_Input'
import { SplineService } from '../../../services/service' 
import InputInterpolation from '../Matrix/inputInterpolation'

import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const axios = require('axios');
const ItemsSpline = () => {
  const [size, setSize] = useState('');
  const [sizeInput, setSizeInput] = useState(0);
  const [Result, setResult] = useState([]);
  const [x,setX] = useState(0);
  let B = [];
  let A =[];
  
  let Xfind = 0 ;
  useEffect(()=>{
    ChangeSizeInput()
    
  })
  const ChangeSizeInput = ()=>{
      setSizeInput(parseInt(size));
      if(A.length > 0){
        for(let i = 0 ; i < sizeInput ; i++){
            document.getElementById(`inputX${i}`).value = A[i];
        }
      }
      if(B.length > 0){
        for(let j = 0 ; j < sizeInput ; j++){
          document.getElementById(`inputFx${j}`).value = B[j];
        }
      }
  }
  const OnchangeSize = (e)=>{
    setSize(e.target.value)
  }
  const Calculate = () =>{
    B = [];
    A =[];
    let result = [];
    setResult([])
    if(sizeInput <= 10 && sizeInput > 1){
      for(let i = 0 ; i < sizeInput ; i++){
        A.push(parseFloat(document.getElementById(`inputX${i}`).value));
        B.push(parseFloat(document.getElementById(`inputFx${i}`).value));
      }
      Xfind = parseFloat(document.getElementById(`inputXfind`).value);
      setX(Xfind)
      console.log(A)
      console.log(B)
      console.log(Xfind)
      result = SplineService(A,B,Xfind);
      console.log(result);
      setResult(result)
    }
    
  }
  
  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/spline")
      .then(function(response){
        setSize(response.data[0].size);
        setSizeInput(response.data[0].size);
        // await <InputInterpolation size={sizeInput}/>;
        let AExlem = response.data[0].AExlem;
        let BExlem = response.data[0].BExlem;
        let Xfindset = 5 ;
        for(let i = 0 ; i < AExlem.length ; i++){
          document.getElementById(`inputX${i}`).value = AExlem[i] ;
          document.getElementById(`inputFx${i}`).value = BExlem[i];
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
              <tbody><tr><th>f{"("+x+")"}</th><td>{Result}</td></tr></tbody>
            </table>
          </ContainerInput>
            
        </ItemFrom>
      </BodyContent>
      
    </>
  );
};

export default ItemsSpline;
