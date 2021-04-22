import React, { useEffect, useState } from "react";
import "../../style.css";
import MatrixInput from '../Matrix/Matrix_Input'
import { ConjugateGradient } from '../../../services/service' 
import InputX from '../Matrix/inputX'
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
import Pagination from '../../../components/Pagination/Pagination'
import Table from '../../../components/Pagination/Table'
const axios = require('axios');
const ItemsConjugate = () => {
  const [size, setSize] = useState('');
  const [sizeInput, setSizeInput] = useState(0);
  // const [matrixResult, setMatrixResult] = useState([]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  let Xi =[];
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
          document.getElementById(`X${j}`).value = Xi[j];
        }
      }
  }
  const OnchangeSize = (e)=>{
    setSize(e.target.value)
  }
  const Calculate = () =>{
    B = [];
    A =[];
    Xi = [];
    let result = [];
    if(sizeInput <= 8 && sizeInput > 0){
      for(let i = 0 ; i < sizeInput ; i++){
        let col = []
        for(let j = 0 ; j < sizeInput ; j++){
          col.push(parseFloat(document.getElementById(`r${i}c${j}`).value));
        }
        A.push(col);
        B.push(parseFloat(document.getElementById(`B:${i}`).value));
        Xi.push(parseFloat(document.getElementById(`X${i}`).value));
      }
      if(sizeInput > 0){
        result = ConjugateGradient(A,B,Xi);
        // console.log(result)
        if(!result){
          setPosts([]);
        }
        else{
          setPosts(result);
          setLoading(false);
        }
      }
    }
  }

  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);

  async function setExelample(){
    await axios.get("http://localhost:5000/api/example/ConjugateGradient?token_api=la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=")
      .then(function(response){
        setSize(response.data[0].size)
        setSizeInput(response.data[0].size);
        // await <MatrixInput size={sizeInput}/>;
        let AExlem = response.data[0].AExlem
        let BExlem = response.data[0].BExlem
        let Xrandom = response.data[0].Xrandom
        for(let i = 0 ; i < response.data[0].size ; i++){
          for(let j = 0 ; j < response.data[0].size ; j++){
            document.getElementById(`r${i}c${j}`).value = AExlem[i][j] ;
          }
          document.getElementById(`B:${i}`).value = BExlem[i];
          document.getElementById(`X${i}`).value = Xrandom[i];
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
            <InputX size={sizeInput}/>
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
              {
                currentPosts.length>0 && <Table style={{fontSize:'10px'}}colomn={currentPosts} loading={loading} Attribute={'ConjugateGradient'} indexOfFirstPost={indexOfFirstPost} postsPerPage={postsPerPage} size={sizeInput}/>
              }
            </table>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
          </ContainerInput>
            
        </ItemFrom>
      </BodyContent>
      
    </>
  );
}

export default ItemsConjugate;
