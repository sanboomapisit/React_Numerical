import React  from 'react'
import './inputMatrix.css'
const InputRegression = ({size}) => {
    let TageinputX= [];
    let TageFx= [];
    if(size <= 10){
        for(let j = 0 ; j < size;j++){
            TageinputX.push(<><div className='labelInterpo'>X{j} :</div><input className='inputInterpo' id={`inputX${j}`} defaultValue={0}></input><br/></>)
            TageFx.push(<><div className='labelInterpo'>fx{j} :</div><input className='inputInterpo' id={`inputFx${j}`} defaultValue={0}></input><br/></>)
        }
    }
    
    return (
        <>
            <div className='containerInputX'>
                <div className='Allinput'><div className='content'>{TageinputX}</div><div className='content'>{TageFx}</div></div>
                <div className='labelInterpo'>X find :</div><input id="inputXfind" className='inputInterpo' defaultValue={0}></input><br/>
                <div className='labelInterpo'> m :</div><input id="TageM" className='inputInterpo' defaultValue={1}></input>
            </div>
        </>
    )
}

export default InputRegression