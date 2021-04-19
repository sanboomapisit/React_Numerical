import React from 'react'
import { DoubScontainer,DbH1,DbWrapper,DbCard,DbH2, } from './DoubleSecElements'
// import Icon1 from '../../images/svg-1.svg';
// import Icon2 from '../../images/svg-2.svg';
// import Icon3 from '../../images/svg-3.svg';

const DoubleSection = ({ id,lightBg,lightText,text,lightBgCard}) => {
    const texto = text;
    const items = texto.map(item=>( 
        
        <>
        {/* {console.log('/'+item)} */}
        <DbCard to={'/'+item} lightBgCard = {lightText} >
            <DbH2 lightText={lightBg} key={item}>{item}</DbH2> 
        </DbCard>
        </>
    ));
    return (
        <DoubScontainer lightBg={lightBg}>
            <DbH1 lightText={lightText}>วิธีการคำนวณ</DbH1>
            <DbWrapper>
                {items}
            </DbWrapper>
        </DoubScontainer>
    )
}

export default DoubleSection
