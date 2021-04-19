import React  from 'react'
import './inputMatrix.css'
const MatrixInput = ({size}) => {
    let matrixA= [];
    let matrixB= [];
    if(size < 9){
        for(let i = 0 ;i < size;i++){
            for(let j = 0 ; j < size;j++){
                matrixA.push(<input className='TableMatrix' id={`r${i}c${j}`}></input>)
            }
            matrixA.push(<br/>)
            matrixB.push(<input className='TableMatrix' id={`B:${i}`}></input>)
        }
    }
    return (
        <>
            <div className='containerMatrix'>
                <div className='MatrixA'><h2>A</h2>{matrixA}</div>
                <div className='MatrixB'><h2>B</h2>{matrixB}</div>
            </div>
            
        </>
    )
}

export default MatrixInput
