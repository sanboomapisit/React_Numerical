import React, { useEffect, useState } from "react";
import "../../style.css";
// import MatrixInput from '../Matrix/Matrix_Input'
import { NewtonDivided } from '../../../services/service' 
import InputInterpolation from '../Matrix/inputInterpolation'
import Table from '../../../components/Pagination/Table'
// import {getExampleData} from '../../apiUrl';
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
// import { isNegative } from "mathjs";
const axios = require('axios');
const ItemsNewtonDivided = () => {
  const [size, setSize] = useState('');
  const [sizeInput, setSizeInput] = useState(0);
  const [Result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  let B = [];
  let A =[];
  let Xfind = 0 ;
  
  
  useEffect(()=>{
    // ArrayExample = getExampleData("NewtonDivid");
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
    if(sizeInput <=10 && sizeInput > 1){
      for(let i = 0 ; i < sizeInput ; i++){
        A.push(parseFloat(document.getElementById(`inputX${i}`).value));
        B.push(parseFloat(document.getElementById(`inputFx${i}`).value));
      }
      Xfind = parseFloat(document.getElementById(`inputXfind`).value);
      result = NewtonDivided(A,B,Xfind);
      console.log(result)
      setResult(result)
      setLoading(false);
    }
    
  }
  
  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/NewtonDivid")
      .then(function(response){
        setSize(response.data[0].size)
        setSizeInput(response.data[0].size);
        // await <InputInterpolation size={sizeInput}/>;
        let AExlem = response.data[0].AExlem ;
        let BExlem = response.data[0].BExlem ;
        let Xfindset = response.data[0].Xfindset ;
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
              <Table colomn={Result} loading={loading} Attribute={'NewtonDivid'} size={sizeInput}/>
            </table>
          </ContainerInput>
            
        </ItemFrom>
      </BodyContent>
      
    </>
  );
};

export default ItemsNewtonDivided;
