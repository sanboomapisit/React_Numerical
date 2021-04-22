import React, { useEffect, useState } from "react";
import "../../style.css";
// import MatrixInput from '../Matrix/Matrix_Input'
import { LeastSquares } from '../../../services/service' 
import InputMultiple from '../Matrix/InputMultiple'
import Table from '../../../components/Pagination/Table'
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const axios = require('axios');
const ItemsMultiple = () => {
  const [size, setSize] = useState('');
  const [sizeEqua, setSizeEqua] = useState(0);
  const [sizeInput, setSizeInput] = useState(0);
  const [loading, setLoading] = useState(false);
  const [findM, setFindM] = useState(0);
  const [Result, setResult] = useState([]);
  let A =[];
  let ArrayEquation = [];
  let Xfind = 0 ;
  useEffect(()=>{
    ChangeSizeInput()
  })
  const ChangeSizeInput = ()=>{
      setSizeInput(parseInt(size));
      
  }
  const OnchangeSize = (e)=>{
    setSize(e.target.value)
  }
  const OnchangeSizeEqua = (e)=>{
    setSizeEqua(e.target.value)
  }
  const Calculate = () =>{
    ArrayEquation=[]
    A =[];
    let result = [];
    setResult([])
    if(sizeInput <= 5 && sizeInput > 1 && sizeEqua <= 10 ){
        for(let i = 0 ; i < sizeEqua ; i++){
            A =[];
            for(let j = 0 ; j < sizeInput ; j++){
                A.push(parseFloat(document.getElementById(`X:${j}Equa:${i}`).value)); 
            }
            A.push(parseFloat(document.getElementById(`YonEqua:${i}`).value));
            ArrayEquation.push(A);
        }
      Xfind = parseFloat(document.getElementById(`inputXfind`).value);
      result = LeastSquares(ArrayEquation,Xfind);
    //   outputXfind = (result[0])*Xfind+(result[1]);
    //   setOutput(outputXfind.toFixed(8))
    setFindM(Xfind) 
    setResult(result)
    setLoading(false);
    }
    
  }
  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/MultiplelinearRegression?token_api=la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=")
      .then(function(response){
        setSize(response.data[0].size)
        setSizeInput(response.data[0].size);
        setSizeEqua(response.data[0].sizeEq);
        // await <InputMultiple sizeX={response.data[0].size} sizeEquation={response.data[0].sizeEq}/>;
        let Exlem = response.data[0].Exlem
        let Xfindset = response.data[0].Xfindset;
        // console.log(Exlem[0])
        for(let i = 0 ; i < Exlem.length ; i++){
            for(let j = 0 ; j < Exlem[0].length-1 ;j++){
                document.getElementById(`X:${j}Equa:${i}`).value = Exlem[i][j] ;
            }
            document.getElementById(`YonEqua:${i}`).value = Exlem[i][Exlem[0].length-1] ;
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
            <div style={{display:'flex'}}>
              <label>sizeX</label><Input className='TheInput' onChange={OnchangeSize} value={size}></Input>
              <label>sizeEquation</label><Input className='TheInput' onChange={OnchangeSizeEqua} value={sizeEqua}></Input>
            </div>
            <InputMultiple sizeX={sizeInput} sizeEquation={sizeEqua}/>
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
                <Table colomn={Result} loading={loading} Attribute={'MultipleLinear'} xFind={findM}/>
            </table>
          </ContainerInput>
            
        </ItemFrom>
      </BodyContent>
      
    </>
  );
};

export default ItemsMultiple;
