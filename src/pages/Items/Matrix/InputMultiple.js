import React  from 'react'
import './inputMatrix.css'
const InputMultiple = ({sizeX,sizeEquation}) => {
    let TageinputX= [];
    let TageEquation= [];
    if(sizeX <= 5 && sizeEquation <=10 && sizeX > 0 && sizeEquation > 0){
        for(let i = 0 ; i < sizeEquation;i++){
            TageinputX= [];
            TageinputX.push(<div className='labelter'>Equa{i+1}:</div>)
            for(let j=0 ; j < sizeX ; j++){
                TageinputX.push(<><input className='inputer' id={`X:${j}Equa:${i}`} placeholder={'X'+(j+1)}></input></>)
            }
            let y = <><div className='labelter'>Y of Equa{i+1}:</div><input className='inputer' id={`YonEqua:${i}`}></input></>
            TageEquation.push(<div className='ContentMul'><div className='ContainerEquation'>{TageinputX}</div><div className='ContainerY'>{y}</div></div>)
        }
    }
    
    return (
        <>
            <div className='containerInputX'>
                {TageEquation}
                <div className="margintop"><div className='labelInterpo'>X find :</div><input id="inputXfind" className='inputInterpo' defaultValue={0}></input><br/></div>
            </div>
        </>
    )
}

export default InputMultiple