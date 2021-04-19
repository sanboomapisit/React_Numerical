import React, { useEffect, useState } from "react";
import "../../style.css";
import MatrixInput from '../Matrix/Matrix_Input'
import { LuDecomposition } from '../../../services/service' 
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const axios = require('axios');
const Items = () => {
  const [size, setSize] = useState('');
  const [sizeInput, setSizeInput] = useState(0);
  const [matrixResult, setMatrixResult] = useState([]);
  let B = [];
  let A =[];
  useEffect(()=>{
    ChangeSizeInput()
  })
  const ChangeSizeInput = ()=>{
    setSizeInput(parseInt(size));
    if(A.length > 0){
      for(let i = 0 ; i < sizeInput ; i++){
        for(let j = 0 ; j < sizeInput ; j++){
          document.getElementById(`r${i}c${j}`).value = A[i][j];
        }
      }
    }
    if(B.length > 0){
      for(let j = 0 ; j < sizeInput ; j++){
        document.getElementById(`B:${j}`).value = B[j];
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
    if(sizeInput <= 8 && sizeInput > 0){
      for(let i = 0 ; i < sizeInput ; i++){
        let col = []
        for(let j = 0 ; j < sizeInput ; j++){
          col.push(parseFloat(document.getElementById(`r${i}c${j}`).value))
        }
        A.push(col);
        B.push(parseFloat(document.getElementById(`B:${i}`).value));
      }
      if(sizeInput > 0 ){    //&& sizeInput < 6
        result = LuDecomposition(A,B);
        for(let i = 0 ; i < result.length;i++){
          result[i] = result[i][0].toFixed(2);
        }
        if(!result){
          setMatrixResult([])
        }else{
          setMatrixResult(result)
        }
      }
    }
  }
  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/LuDecomposition")
      .then(function(response){
        setSize(response.data[0].size)
        setSizeInput(response.data[0].size);
        // await <MatrixInput size={sizeInput}/>;
        let AExlem = response.data[0].AExlem;
        let BExlem = response.data[0].BExlem;
        for(let i = 0 ; i < response.data[0].size ; i++){
          for(let j = 0 ; j < response.data[0].size ; j++){
            document.getElementById(`r${i}c${j}`).value = AExlem[i][j] ;
          }
        document.getElementById(`B:${i}`).value = BExlem[i];
      
    }
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
            <MatrixInput size={sizeInput}/>
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
                  <thead>
                    <th>B</th>
                    <th>result</th>
                  </thead>
                  <tbody>
                    {matrixResult.map((res,index)=>(<tr><td>B{index+1}</td><td>{res}</td></tr>))}
                  </tbody>
                </table>
            </ContainerInput>
        </ItemFrom>
      </BodyContent>
      
    </>
  );
};

export default Items;
