import styled from 'styled-components';
export const InfoContainer = styled.div`
    color:#fff;
    background:${({ lightBg })=>(lightBg?'#f9f9f9':'#010606')}; 
    @media screen and (max-width:768px){
        height:1150px;
        padding:80px 0;
    }
    @media screen and (max-width:480px){
        height: 1200px;
    }
    
    
`;
export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin:0 auto;
    padding:0 24px;
    justify-content:center;
`;
export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({ imgStart })=>
        imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width:768px){
        grid-template-areas: ${({ imgStart })=>
        (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`;
export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area: col1;
` ;
export const Column2 = styled.div`
    margin-bottom:15px;
    margin-left:40px;
    padding:0 15px;
    grid-area: col2;
` ;
export const TextWrapper = styled.div`
    max-width:500px;
    padding-top:0 ;
    padding-bottom:20px; 
` ;
export const TopLine = styled.p`
    color:#f5c100;
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
`;
export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:${({ lightText })=>(lightText ?'#f7f7fa':'#010606')};

    @media screen and (max-width:480px){
        font-size:32px;
        
    }
`;
export const Subtitle = styled.div`
    margin-top:30px;
    margin-bottom:30px;
    max-width:450px;
    font-size:18px;
    /* line-height:24px; */
    color:${({ darkText })=>(darkText ? '#010606':'#fff')}; 
    @media screen and (max-width:768px){
        height:350px;
        margin-bottom:60px;
    }
    @media screen and (max-width:480px){
        height:350px;
        margin-bottom:300px;
    }
`;
export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`;
export const ImgWrap = styled.div`
    max-width:540px;
    height:100%;
    /* @media screen and (max-width:768px){
        height:100px;
        max-width:300px;
    }  */
    /* @media screen and (max-width:480px){
        height:120px;
         margin-bottom:120px; 
    } */
`;
export const Img = styled.img`
    width:80%;
    margin: 0 0 10px 0 ;
    padding-right:0;
    @media screen and (max-width:480px) and (min-width:380px){
        height:250px;
         margin-bottom:120px; 
    }
`;