import React, { useEffect, useState } from "react";
import "../../style.css";
// import MatrixInput from '../Matrix/Matrix_Input'
import { Polynomial } from '../../../services/service' 
import InputRegression from '../Matrix/InputRegression'
import Table from '../../../components/Pagination/Table'
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const axios = require('axios');
const ItemsPolynomial = () => {
  const [size, setSize] = useState('');
  const [sizeInput, setSizeInput] = useState(0);
  const [Result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [findM, setFindM] = useState(0);
    
  let A =[];
  let ArrayFunction = [];
  let Xfind = 0 ;
  let CountM = 0 ;
  
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
        document.getElementById(`TageM`).value = CountM;
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
    let g = parseFloat(document.getElementById(`TageM`).value);
    if( g > 0 ){  //   || findM < sizeInput
        if(sizeInput < 11 && sizeInput > 1){
        for(let i = 0 ; i < sizeInput ; i++){
            A =[];
            A.push(parseFloat(document.getElementById(`inputX${i}`).value));
            A.push(parseFloat(document.getElementById(`inputFx${i}`).value));
            ArrayFunction.push(A);
        }
        Xfind = parseFloat(document.getElementById(`inputXfind`).value);
        CountM = parseFloat(document.getElementById(`TageM`).value);
        result = Polynomial(ArrayFunction,Xfind,CountM);
        setFindM(Xfind)
        console.log(result);
        setResult(result)
        setLoading(false);
        }
    }
  }
  
  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/PolynomialRegression?token_api=la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=")
      .then(function(response){
        setSize(response.data[0].size)
        setSizeInput(response.data[0].size);
        // await <InputRegression size={sizeInput}/>;
        let Exlem = response.data[0].Exlem
        let Mnumber = response.data[0].Mnumber;
        let Xfindset = response.data[0].Xfindset ;
        for(let i = 0 ; i < Exlem.length ; i++){
          document.getElementById(`inputX${i}`).value = Exlem[i][0] ;
          document.getElementById(`inputFx${i}`).value = Exlem[i][1];
        }
        document.getElementById(`TageM`).value = Mnumber;
        document.getElementById(`inputXfind`).value = Xfindset;
        setFindM(Xfindset)
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
              <InputRegression size={sizeInput}/>
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
                <Table colomn={Result} loading={loading} Attribute={'Polynomial'} xFind={findM}/>
            </table>
          </ContainerInput>
        </ItemFrom>
      </BodyContent>
      
    </>
  );
};

export default ItemsPolynomial;
