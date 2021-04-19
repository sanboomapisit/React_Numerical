import styled from  'styled-components';
import  { Link  } from 'react-router-dom';
export const DoubScontainer = styled.div`
    height:250px;
    border-radius:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:${({ lightBg })=>(lightBg?'#f9f9f9':'#010606')}; 
    /* background-color:green; */
    @media screen and (max-width:768px){
        height: 380px;
    }
    @media screen and (max-width:480px){
        height: 620px;
    }
`;
export const DbWrapper = styled.div`
    max-width:100%;
    margin:0 auto;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr ;
    align-items:center;
    grid-gap:16px;
    padding: 0 5px;
    @media screen and (max-width:768px){
        grid-template-columns:1fr 1fr ;
    }
    
    @media screen and (max-width:480px){
        grid-template-columns:1fr;
    }
`;
export const DbCard = styled(Link)`
    width:140px;
    text-decoration:none;
    background:${({ lightBgCard })=>(lightBgCard?'#f9f9f9':'#010606')}; 
    /* background-color:#fff; */
    display:flex;
    /* flex-direction:column;
    justify-content:flex-start; */
    align-items:center;
    border-radius:10px;
    max-height:50px;
    height:50px;
    padding:10px;
    box-shadow :${({ lightBgCard })=>(lightBgCard?'0 3px 5px rgba(255,255,255,0.3)':'0 3px 5px rgba(0,0,0,0.3)')};
    /* box-shadow:0 3px 5px rgba(255,255,255,0.3); */
    transition: all 0.2s ease-in-out;
    @media screen and (max-width:768px){
        width:140px;
    }
    @media screen and (max-width:480px){
        width:180px;
    }
    &:hover{
        transform:scale(1.04);
        transition:all 0.2s ease-in-out;
        cursor:pointer;
    }
`
export const DbIcon = styled.img`
    height:80px;
    width:80px;
    margin-bottom:10px;
`
export const DbH1 = styled.h1`
    font-size:1.3rem;
    color:${({ lightText })=>(lightText?'#f9f9f9':'#010606')};
    margin-bottom:20px;

    @media screen and (max-width:480px){
        font-size:1rem;
    }
`
export const DbH2 = styled.h2`
    color:${({ lightText })=>(lightText ?'#f7f7fa':'#010606')};
    margin:0 auto;
    text-align:center;
    font-size:0.6rem;
    /* margin-bottom:5px; */
`
export const DbP = styled.p`
    font-size:0.3rem;
    text-align:center;
`