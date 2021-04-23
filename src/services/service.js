import GaussianElimination from "na-gaussian-elimination";
import BigNumber from "bignumber.js";
import { regression as Regress }   from "multiregress"
// const { Infinity, log } = require("mathjs");
const math = require("mathjs");


// import { derivative } from "mathjs";
export const Fx = (fx, start, finish) => {
  let result = [];
  for (let i = start; i <= finish; i++) {
    let scope = { x: i };
    let ans = math.evaluate(fx, scope);
    let res = {
      x:i,
      fx: ans.toFixed(6)
    };
    result.push(res);
  }

  return result;
};
export const Bisection = (fx, xl, xr) => {
  let result = [];
  let searchXm = (Xl, Xr, XmOld, error) => {
    let Xm = (Xl + Xr) / 2;
    let scopeFxm = { x: Xm };
    let ansFxm = math.evaluate(fx, scopeFxm);
    let scopeFxr = { x: Xr };
    let ansFxr = math.evaluate(fx, scopeFxr);
    // if (count !== 0) {
      let res = {
        xm: Xm.toFixed(6),
        xl: Xl.toFixed(6),
        xr: Xr.toFixed(6),
        error: Math.abs((Xm - XmOld) / Xm).toFixed(6),
      };
      result.push(res);
    // }
    // count++;
    if (error > 0.000001) {
      if (ansFxm * ansFxr > 0) {
        return searchXm(Xl, Xm, Xm, Math.abs((Xm - XmOld) / Xm));
      }
      return searchXm(Xm, Xr, Xm, Math.abs((Xm - XmOld) / Xm));
    }
    return result;
  };

  let ans = searchXm(xl, xr, 0, 1);
  return ans;
};
export const False_Position = (fx, xl, xr) => {
  let result = [];
  let Xl = xl;
  let Xr = xr;
  let count = 0;
  let Xold = 0;
  let error = 1;
  do {
    let scopeFxl = { x: Xl };
    let ansFxl = math.evaluate(fx, scopeFxl);
    let scopeFxr = { x: Xr };
    let ansFxr = math.evaluate(fx, scopeFxr);
    let x1 = ((Xl * ansFxr) - (Xr * ansFxl)) / (ansFxr - ansFxl);
    let scopeFx1 = { x: x1 };
    let ansFx1 = math.evaluate(fx, scopeFx1);
    if (ansFx1 * ansFxr > 0) {
      Xr = x1;
      if (count > 0) {
        error = Math.abs((x1 - Xold) / x1);
      }
    } else if (ansFx1 * ansFxr < 0) {
      Xl = x1;
      if (count > 0) {
        error = Math.abs((x1 - Xold) / x1);
      }
    }
    Xold = x1;
    let res = {
      xm: Xold.toFixed(6),
      xl: Xl.toFixed(6),
      xr: Xr.toFixed(6),
      error: error.toFixed(6),
    };
    result.push(res);
    count++;
  } while (error > 0.000001);
  return result;
};

export const OnePoint = (fx, x0) => {
  // let fn =(x)=>(1/4)+(x/2);  //0.5 //Math.sqrt(2*x+3)
  let result = [];
  let i = 1;
  let p0 = x0; //x0
  let error = 0.000001;
  let N = 42;
  let Error1 = 1;
  while (i <= N) {
    let scopeXi = { x: p0 };
    let answer = math.evaluate(fx, scopeXi);
    Error1 = Math.abs((answer - p0) / answer);
    let ans = {
      answer: answer.toFixed(6),
      error: Error1.toFixed(6),
    };
    result.push(ans);
    // console.log("x" + i + " =" + answer + " Error >> " + Error1);
    if (Error1 < error) {
      break;
    }
    p0 = answer;
    i += 1;
  }
  return result;
};
export const Newton = (fx, X0) => {
  let result = [];
  let x0 = X0; //2.0
  let Xnew = 0,
    Xk = x0,
    DeltaX = 0,
    error = 1;
  while (error > 0.000001) {
    let scopeXk = { x: Xk };
    let fn = math.evaluate(fx, scopeXk);
    let Diff = math.derivative(fx, "x");
    let scopeDXk = { x: parseFloat(Xk) };
    let dfn = Diff.evaluate(scopeDXk);
    DeltaX = -(fn / dfn);
    Xnew = Xk + DeltaX;
    error = Math.abs(DeltaX / Xnew);
    Xk = Xnew;
    let ans = {
      answer: Xk.toFixed(6),
      error: error.toFixed(6),
    };
    result.push(ans);
  }
  return result;
};
export const Secant = (fx, X0, X1) => {
  let result = [];
  // let fn = (x) => Math.pow(x, 2) - 7;
  const next = X1-X0;
  let x0 = X0,
    x1 = X1;
  let X = 0,
    Xlast = x1,
    Xsolast = x0,
    error = 1;
  result.push({
    answer: Xsolast.toFixed(6),
    error: 1,
  });
  result.push({
    answer: Xlast.toFixed(6),
    error: 1,
  });
  while (error > 0.000001) {
    let scopeXlast = { x: Xlast };
    let FnXlast = math.evaluate(fx, scopeXlast);
    let scopeXsolast = { x: Xsolast };
    let FnXsolast = math.evaluate(fx, scopeXsolast);
    X = Xlast - (FnXlast * (Xsolast - Xlast)) / (FnXsolast - FnXlast);
    error = Math.abs((X - Xsolast) / X);
    let ans = {
      answer: X.toFixed(6),
      error: error.toFixed(6),
    };
    result.push(ans);
    Xsolast = X;
    Xlast = X + next; //edit
  }
  return result;
};

// linear algibra
export const CramerRule = (size,MatrixA,MatrixB)=>{
  let x =[];
  let index = [];
    for(let i = 0 ; i < size; i++ ){ index.push(i);}
  let A = math.matrix(MatrixA);
  let detA = math.det(A);
  let result = math.matrix(MatrixB);
  let pointOfx = 0;
  while (pointOfx < result._size[0]) {
    let calA = math.clone(A);
    calA.subset(math.index(index,pointOfx),result.subset(math.index(index))); 
    x.push(Math.round(math.det(calA)/detA));
    pointOfx++;
  }
  return x ;
}



export const gaussElimination =(MatrixA,MatrixB) =>{
  let system = 0 ; 
  let answer = []; 
  let matrix = MatrixA;
  let result = MatrixB;
  var zero = new BigNumber(0);
  GaussianElimination.defaultOptions.zero = zero;
  var gaussianElimination = new GaussianElimination();
  system = gaussianElimination.solve(matrix, result);
  let temp = system.solution ;
  for(let i = 0 ; i < MatrixB.length;i++){
    answer.push((parseFloat(temp[i])).toFixed(4))
  }
  // console.log(answer)
  return answer;
  };


let linSystem = require("linear-equation-system");
export const GaussJordan =(MatrixA,MatrixB)=>{
  let result = linSystem.solve(MatrixA, MatrixB);
  return result;
}


export const LuDecomposition =(MatrixA,MatrixB)=>{
  let m = math.lusolve(MatrixA,MatrixB);
  return m ;
}


export const Jacobi =(MatrixA,MatrixB,Xinput)=>{
  let result = []
  let A = math.matrix(MatrixA);
  let B = math.matrix(MatrixB);
  let xold = Xinput;
  let iteration = 2;
  while(iteration <= 45){
      let subresult = [];
      let xnow = [];
      for(let i = 0 ; i < B._size[0] ; i++){
          let x = B._data[i];
          for(let j = 0; j < A._size[0] ; j++){
              if(i!==j){
                  x -=  (A._data[i][j]*xold[j]);
              }
          }
          x = x/A._data[i][i];
          xnow.push(x);
      }
      // console.log(xnow)
      // console.log(subresult)
      let i = 0;
      let check = true;
      let error = [] ;
      while(i<xnow.length){
        let err = Math.abs((xnow[i]-xold[i])/xnow[i])
        error.push(err)
        check = check && ( err < 0.000001);
        i++;
      }
      subresult = [...xnow, ...error]
      // console.log(subresult)
      result.push(subresult);
      if(check === true){  
        break;
      }
      xold = xnow;
      iteration++;
  }
  return result;
}
export const GaussSeidel =(MatrixA,MatrixB,Xinput)=>{
  let result = [];
  let A = math.matrix(MatrixA);
  let B = math.matrix(MatrixB);
  let xold = Xinput;
  let iteration = 2
  while(iteration <= 45){
    let subresult = [];
    let xnow = [];
    for(let i = 0 ; i < B._size[0] ; i++){
        let x = B._data[i];
        for(let j = 0; j < A._size[0] ; j++){
            if(i !== j && isNaN(xnow[j])){
                x -= (A._data[i][j]*xold[j]); 
            }
            else if(i !== j && !(isNaN(xnow[j]))){
                x -= (A._data[i][j]*xnow[j]);
            }
        }
        x /= A._data[i][i];
        xnow.push(x);
    }
    let i = 0;
    let check = true;
    let error = [] ;
    while(i<xnow.length){
      let err = Math.abs((xnow[i]-xold[i])/xnow[i])
      error.push(err)
      check = check && ( err < 0.000001);
      i++;
    }
    subresult = [...xnow, ...error]
      // console.log(subresult)
    result.push(subresult);
    if(check === true){
        break;
    }
    xold = xnow;
    iteration++;
  }
  return result;
}


export const ConjugateGradient =(MatrixA,MatrixB,Xrandom)=>{
  let a = math.matrix(MatrixA);
  let ans = MatrixB;
  let i = ans.length,
    pos_def = false;
  while (true) {
    //positive difinite
    if (i === 0) break;
    if (
      math.det(math.subset(a, math.index(math.range(0, i), math.range(0, i)))) > 0
    )
      pos_def = true;
    else {
      pos_def = false;
      break;
    }
    i--;
  }
  if (pos_def === true) console.log("matrix is positive definite");
  else console.log("matrix is can't use in this method");
    let result = [] ;
    let x = math.zeros(ans.length),
      ECL = 0.000001,
      err = Infinity,
      r = 0;
    x._data = Xrandom ;
    console.log(x)
    let ramda = Infinity,
      alpha = Infinity;
    //pre iteration
    let R = ans.map((value, index) => {
      //find R0
      return (
        math.squeeze(
          math.multiply(a.subset(math.index(index, math.range(0, ans.length))), x)
        ) - ans[index]
      );
    });
    let D = R.map((value) => value * -1); //D = -R
    //calculate
    while (true) {
      if(r > 48){
        break;
      }
      // console.log("iteration : "+ r +" R_old : "+R)
      ramda =
        (-1 * math.multiply(math.transpose(D), R)) /
        math.multiply(math.transpose(D), a, D); //ramda
        for (let index = 0; index < x._size; index++) {
          x._data[index] =
            x._data[index] + ramda * math.subset(D, math.index(index));
        }
       //Xk+1
      R = ans.map((value, index) => {
        //Rk+1
        return (
          math.squeeze(
            math.multiply(a.subset(math.index(index, math.range(0, ans.length))), x)
          ) - ans[index]
        );
      });
      err = math.sqrt(math.multiply(R, math.transpose(R))); //error
      // console.log(" R : "+ R + "  D : "+D +" ramda : "+ ramda)
      
      result.push({
        x:x._data,
        err:err
      });
      // console.log("x : " + x + " error : " + err);
      if (err <= ECL) {
        break;
      }
      //for_nextiteration
      alpha =
        math.multiply(math.transpose(R), a, D) /
        math.multiply(math.transpose(D), a, D); //alpha
      for (let index = 0; index < R.length; index++) {
        D[index] = -1 * R[index] + alpha * math.subset(D, math.index(index));
      }; //Dk+1
      // console.log("Alpha : "+ alpha + " Dnew : " + D)
      r++;
    }
    return result;
}


export const NewtonDivided = (Xin,fxin,findX)=> {
      let x = Xin;
      let fx = fxin;
      let result = 0;
      let resultC = [];
      let lenghtt = Xin.length;
      const cal = (fx1,x1,fx0,x0) => ((fx1-fx0)/(x1-x0)) ;
      let Ci = math.zeros(lenghtt);
      let C =[];
      for(let i = 0 ; i < lenghtt ; i++) C.push(Ci);
      // let C = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]; //array c1,c2,c3,c4,c5
      let must = () =>{
          let k = 1
          for(let i = x.length-1 ; i > 0 ; i--){
              for(let j = 0 ; j < i ; j++){
                  if(i === x.length-1){
                      C[j][k+j] = cal(fx[j+k],x[j+k],fx[j],x[j]) ;
                      // console.log(cal(fx[j+k],x[j+k],fx[j],x[j]));
                  }else{  
                      C[j][k+j] = cal(C[j+1][k+j],x[k+j],C[j][k+j-1],x[j])
                  //     console.log(cal(C[k+j-1][k+j],x[k+j],C[j][j+1],x[j]));
                  }
              }
          k++
          }
      }
      let find = (value)=>{
          let sum = fx[0];
          resultC.push(fx[0]);
          for(let i = 1; i < x.length ;i++){ 
            resultC.push(C[0][i]);
            // console.log("C",i," : ",C[0][i]);
              let temp2 = C[0][i];
              for(let j =0;j<i;j++){
                  let temp1 = value-x[j];
                  temp2 *= temp1;
              }
              sum += temp2;
          }
          return sum ;
      }
      if(Xin.length === 2 ){
        must();
        console.log('linear :')
        let xresult= find(findX);
        result = [...resultC,xresult,'linear']
        // console.log(find(findX));
      }
      if(Xin.length === 3){
        must();
        console.log('quadratic :')
        let xresult= find(findX);
        result = [...resultC,xresult,'quadratic']
      }
      if(Xin.length > 3){
        must();
        console.log('polynomial :');
        let xresult= find(findX);
        result = [...resultC,xresult,'polynomial']
      }
    return result
} 

export const Lagrange =(Xin,fxin,findX)=>{  
    let x= Xin ;
    let y= fxin ;
    let fx=0; 
    for(let i = 0 ; i < x.length ; i++){
      let li=1;
      for(let j = 0;j < x.length ; j++){
        if(i!==j ){
          li*=(x[j]-findX)/(x[j]-x[i]);                
        }
      }
      fx+=li*y[i];
    }
    return fx.toFixed(8)
}

const Spline = require('cubic-spline');
export const SplineService =(Xin,Yin,xFind)=>{
  const spline = new Spline(Xin, Yin);
  let r = spline.at(xFind);
  return r.toFixed(8);
}

const regression =require('regression');
export const Linear = (input,xFind)=>{
  const result = regression.linear(input,{precision: 8})
  const gradient = result.equation[0];
  const yIntercept = result.equation[1];
  let resultC = [gradient,yIntercept];
  return resultC;
}

export const Polynomial = (input,xFind,m)=>{
  
  let resultC = [];
  const result = regression.polynomial(input,{precision: 8,order: m})
  for(let i = 0 ; i <= m ;i++){
    const gradient = result.equation[i];
    resultC.push(gradient)
  }
  // console.log(Regress([[1,0, 1, 4], [0,1, 3, -5], [2,4 ,1, -6],[3,2, 2, 0],[4,1, 5, -1],[2,3, 3, -7],[1,6,4,-20]]));
  return resultC;
  
}

//import on top this page
export const LeastSquares =(Equation,Xfind)=>{
  // console.log(Equation)
  // console.log(Regress(Equation))  
  return Regress(Equation);
    
}
