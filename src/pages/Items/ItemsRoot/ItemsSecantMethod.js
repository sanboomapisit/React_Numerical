import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import Graph from "../../Graph";
import "../../style.css";
import { Secant } from "../../../services/service";
import Pagination from '../../../components/Pagination/Pagination'
import Table from '../../../components/Pagination/Table'
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const axios = require('axios');
const AlgebraLatex = require("algebra-latex");
const ItemsSecant = () => {
  addStyles();
  const [latex, setLatex] = useState("");
  let [x0, setX0] = useState(null);
  let [x1, setX1] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const OnchangeX0 = (e) => {
    setX0(e.target.value);
  };
  const OnchangeX1 = (e) => {
    setX1(e.target.value);
  };

  const submited = () => {
    let result = 0;
    const p = latex.replaceAll('ln','log')
    let latexinput = p.replace('\\exp','exp')
    let algebraObj = new AlgebraLatex().parseLatex(latexinput);
    let text = algebraObj.toMath();
    let output = text.replace('exp*x','exp(x)')
    console.log(output)
    result = Secant(output, parseFloat(x0), parseFloat(x1));
    setPosts(result);
    setLoading(false);
  };
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  
  async function Example(){
    await axios.get("http://localhost:5000/api/example/SecantMethod?token_api=la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=")
      .then(function(response){
        setX0(response.data[0].X0);
        setLatex(response.data[0].latex);
        setX1(response.data[0].X1)
        // setDataExample(response.data[0]) ;
      })
      .catch(function(error){
        setX0('error');
        setLatex('error');
        setX1('error')
      })
    
  }
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);
  return (
    <>
      <BodyContent>
        <ItemFrom>
          <ContainerInput>
            <label>F(x)</label>
            <EditableMathField
              className="InputFx"
              style={{ margin: "10px auto", display: "block" }}
              latex={latex}
              onChange={(mathField) => {
                setLatex(mathField.latex());
              }}
            />
            <label>x0</label>
            <Input onChange={OnchangeX0} value={x0}></Input>
            <label>x1</label>
            <Input onChange={OnchangeX1} value={x1}></Input>
            <div className='containerBtn'><Button onClick={submited}>calculate</Button><Button onClick={Example}>example</Button></div>
            <table>
              <Table colomn={currentPosts} loading={loading} Attribute={'SecantMethod'} indexOfFirstPost={indexOfFirstPost} postsPerPage={postsPerPage}/>
            </table>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
          </ContainerInput>
        </ItemFrom>
        <ItemFrom>
          <Graph fx={latex} />
        </ItemFrom>
      </BodyContent>
    </>
  );
};

export default ItemsSecant;
