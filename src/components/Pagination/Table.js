import React from "react";
const Poster = ({ colomn=[], loading, Attribute,indexOfFirstPost,postsPerPage ,size,xFind=0}) => {
  let table = 0;
  
  if(Attribute === 'Graphical'){
    const child = colomn.map((post,index) => (<tr><td>{indexOfFirstPost+index}</td><td>{post.x}</td><td>{post.fx}</td></tr>))
    table = <><th>Iteration</th>
    <th>X</th>
    <th>f(x)</th>
    {child}</>
  }
  else if(Attribute === 'Bisection'){
    const child = colomn.map((post,index) => (<tr><td>{indexOfFirstPost+index}</td><td>{post.xm}</td><td>{post.xl}</td><td>{post.xr}</td><td>{post.error}</td></tr>))
    table = <><th>Iteration</th>
    <th>Xm</th>
    <th>Xl</th>
    <th>Xr</th>
    <th>Error</th>
    {child}</>
  }
  else if(Attribute === 'FalsePosition'){
    const child = colomn.map((post,index) => (<tr><td>{indexOfFirstPost+index}</td><td>{post.xm}</td><td>{post.xl}</td><td>{post.xr}</td><td>{post.error}</td></tr>))
    table = <><th>Iteration</th>
    <th>Xm</th>
    <th>Xl</th>
    <th>Xr</th>
    <th>Error</th>
    {child}</>
  }
  else if(Attribute === 'OnePoint'){
    const child = colomn.map((post,index) => (<tr><td>{indexOfFirstPost+index}</td><td>{post.answer}</td><td>{post.error}</td></tr>))
    table = <><th>Iteration</th>
    <th>Root X</th>
    <th>Error</th>
    {child}</>
  }
  else if(Attribute === 'SecantMethod'){
    const child = colomn.map((post,index) => (<tr><td>{indexOfFirstPost+index}</td><td>{post.answer}</td><td>{post.error}</td></tr>))
    table = <><th>Iteration</th>
    <th>Root X</th>
    <th>Error</th>
    {child}</>
  }
  else if(Attribute === 'Newton'){
    const child = colomn.map((post,index) => (<tr><td>{indexOfFirstPost+index}</td><td>{post.answer}</td><td>{post.error}</td></tr>))
    table = <><th>Iteration</th>
    <th>Root X</th>
    <th>Error</th>
    {child}</>
  }
  
  else if(Attribute === 'Jabobi'){
    let tageX = [];
    let tageEr = [] ;
    let child = [];
    if(colomn[0].length === size*2 ){
      for(let j = 0 ; j < colomn.length;j++){
        let rows =0;
        tageEr = [] ;
        tageX = [] ;
        for(let i = 0 ; i < ((colomn[0].length)/2);i++){
          tageX.push(<td>{(colomn[j][i]).toFixed(5)}</td>) ; 
          tageEr.push(<td>{(colomn[j][size+i]).toFixed(5)}</td>) ;
        }
        rows = <tr><td>{indexOfFirstPost+1+j}</td>{tageX}{tageEr}</tr>
        child.push(rows);
      }
    }
    
    let headName = [];
    let headError = [] ;
    for(let i =0 ; i < size ;i++){
      headName.push(<th>X{i}</th>)
      headError.push(<th>errorx{i}</th>)
    }
    table = <><th>Iter.</th>{headName}{headError}{child }</>
  }
  else if(Attribute === 'ConjugateGradient'){
    // console.log(colomn.length)
    let tageX = [];
    let child = [];
    for(let j = 0 ; j < colomn.length;j++){
      let rows =0;
      tageX = []
      for(let i =0 ; i < (colomn[0].x.length);i++){
        let resize = (colomn[j].x[i]).toFixed(5)
        tageX.push(<td>{resize}</td>) ; 
      } 
      rows = <tr><td>{indexOfFirstPost+j}</td>{tageX}<td>{(colomn[j].err).toFixed(5)}</td></tr>
      child.push( rows);
    }
    let headName = [];
    for(let i =0 ; i < size ;i++){
      headName.push(<th>X{i}</th>)
    }
    table = <><th>Iter.</th>{headName}<th>Error</th>{child}</>
  }
  else if(Attribute === 'NewtonDivid'){
    let tageC = [];
    if(size <= 10){
      for(let i = 0 ; i < (size);i++){
        tageC.push(<tr><th>C{i}</th><td>{colomn[i]}</td></tr>) ; 
      }
    }
    tageC.push(<tr><th>f(x) find</th><td>{colomn[size]}</td></tr>)
    table = <><th colspan="2" style={{backgroundColor:'#9e7f10',padding:'10px'}}>{colomn[size+1]}</th>{tageC}</>
  }
  
  // else if(Attribute === 'NewtonDivid'){
  //   let tageC = [];
  //   for(let i = 0 ; i < (size-2);i++){
  //     tageC.push(<tr><th>C{i}</th><td>{colomn[i]}</td></tr>) ; 
  //   }
  //   tageC.push(<tr><th>f(x) find</th><td>{colomn[size-2]}</td></tr>)
  //   table = <><th colspan="2" style={{backgroundColor:'#9e7f10',padding:'10px'}}>{colomn[size-1]}</th>{tageC}</>
  // }
  else if(Attribute === 'Polynomial'){
    let tageInput = [] ;
    let sum = 0 ;
    // console.log(xFind)
    for(let i = 0; i < colomn.length ;i++){
      sum += Math.pow(xFind,i)*(colomn[colomn.length-1-i]);
      tageInput.push(<tr><th>C{i}</th><td>{colomn[colomn.length-1-i]}</td></tr>)
    }
    table = <>{tageInput}<tr><th>{"f("+xFind+")"}</th><td>{sum.toFixed(8)}</td></tr></>
  }
  else if(Attribute === 'MultipleLinear'){
    
    let tageInput = [] ;
    let sum = 0 ;
    // console.log(xFind)
    for(let i = 0; i < colomn.length ;i++){
      if(i === 0){
        sum = colomn[i] ;
        // console.log(sum+" + ")
      }else{
        sum += xFind*(colomn[i]);
        // console.log(xFind+"*("+colomn[i]+")+")
      }
      
      tageInput.push(<tr><th>a{i}</th><td>{(colomn[i]).toFixed(4)}</td></tr>)
    }
    table = <>{tageInput}<tr><th>{"f("+xFind+")"}</th><td>{sum.toFixed(4)}</td></tr></>
    
  }
  else if(loading){
    table = <h2 style={{padding:'10px'}}>Loading......</h2>;
  }
  return (
      <>
        {table}
    </>
  );
};
export default Poster;