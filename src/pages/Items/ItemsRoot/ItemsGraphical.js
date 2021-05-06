import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";
import Graph from "../../Graph";
import "../../style.css";
import { Fx } from "../../../services/service";

import Pagination from '../../../components/Pagination/Pagination'
import Table from '../../../components/Pagination/Table'
import {
  ItemFrom,
  BodyContent,
  ContainerInput,
  Input,
  Button,
} from "../../styledItems";
const AlgebraLatex = require("algebra-latex");
const axios = require('axios');
const Items = () => {
  addStyles();
  const [posts, setPosts] = useState([]);
  const [latex, setLatex] = useState("");
  const [start, setStart] = useState(null);
  const [finish, setFinish] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const Onchangestart = (e) => {
    setStart(e.target.value);
  };
  const Onchangefinish = (e) => {
    setFinish(e.target.value);
  };
  
  const submited = () => {
    let result = 0;
    const p = latex.replaceAll('ln','log')
    const latexinput = p.replace('\\exp','exp')
    const algebraObj = new AlgebraLatex().parseLatex(latexinput);
    const text = algebraObj.toMath();
    let output = text.replace('exp*x','exp(x)')
    
    result = Fx(output, parseFloat(start), parseFloat(finish));
    setPosts(result);
    setLoading(false);
  };

  
  async function Example(){
    await axios.get("http://localhost:5000/api/example/Graphical?token_api=la2UEiUaQD1XttfIX19Ub4t9qx1rcEF1YaenLS1bMZo=")
      .then(function(response){
        setStart(response.data[0].start);
        setFinish(response.data[0].finish);
        setLatex(response.data[0].latex);
        // setDataExample(response.data[0]) ;
      })
      .catch(function(error){
        setStart('error');
        setFinish('error');
        setLatex('error');
      })
    
  }
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
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
            <label>X(start)</label>
            <Input onChange={Onchangestart} value={start}></Input>
            <label>X(stop)</label>
            <Input onChange={Onchangefinish} value={finish}></Input>
            <div className='containerBtn'><Button onClick={submited}>calculate</Button><Button onClick={Example}>example</Button></div>
            <table>
              <Table colomn={currentPosts} loading={loading} Attribute={'Graphical'} indexOfFirstPost={indexOfFirstPost} postsPerPage={postsPerPage}/>
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
