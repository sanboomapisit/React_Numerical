import React  from 'react'
import './inputMatrix.css'
const InputX = ({size}) => {
    let TageinputX= [];
    if(size < 9){
        for(let j = 0 ; j < size;j++){
            TageinputX.push(<div className='Input'><div className='InputName'>X{j}</div><input className='InputXTageinput' id={`X${j}`} defaultValue={0}></input></div>)
        }
    }
        
    return (
        <>
            <div className='containerInputX'>
                <div className='inputXAll'>{TageinputX}</div>
            </div>
            
        </>
    )
}

export default InputX