import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import Graph from "../../Graph";
import "../../style.css";
import { Bisection } from "../../../services/service";
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
const Items = () => {
  addStyles();
  const [latex, setLatex] = useState("");
  let [xl, setXl] = useState(null);
  let [xr, setXr] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const OnchangeXl = (e) => {
    setXl(e.target.value);
  };
  const OnchangeXr = (e) => {
    setXr(e.target.value);
  };
  const submited = () => {
    let result = 0;
    console.log(latex)  
    const p = latex.replaceAll('ln','log')
    const latexinput = p.replaceAll('\\exp','exp')
    const algebraObj = new AlgebraLatex().parseLatex(latexinput);
    const text = algebraObj.toMath();
    let output = text.replaceAll('exp*x','exp(x)')
    result = Bisection(output, parseFloat(xl), parseFloat(xr));
    setPosts(result);
    setLoading(false);
  };
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  async function Example(){
    await axios.get("http://localhost:5000/api/example/Bisection?token_api=la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=")
      .then(function(response){
        setXl(response.data[0].Xl);
        setXr(response.data[0].Xr);
        setLatex(response.data[0].latex);
        // setDataExample(response.data[0]) ;
      })
      .catch(function(error){
        setXl('error');
        setXr('error');
        setLatex('error');
      })
    
  }
  const paginate = (pageNumber)=>setCurrentPage(pageNumber);
  return (
    <>
      <BodyContent>
        <ItemFrom>
          <ContainerInput>
            <label>Fx</label>
            <EditableMathField
              className="InputFx"
              style={{ margin: "10px auto", display: "block" }}
              latex={latex}
              onChange={(mathField) => {
                setLatex(mathField.latex());
              }}
            />
            <label>Xl</label>
            <Input onChange={OnchangeXl} value={xl}></Input>
            <label>Xr</label>
            <Input onChange={OnchangeXr} value={xr}></Input>
            <div className='containerBtn'><Button onClick={submited}>calculate</Button><Button onClick={Example}>example</Button></div>
            <table>
              <Table colomn={currentPosts} loading={loading} Attribute={'Bisection'} indexOfFirstPost={indexOfFirstPost} postsPerPage={postsPerPage}/>
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

export default Items;
