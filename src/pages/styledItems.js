import styled from "styled-components";
export const ItemFrom = styled.div`
  width: 520px;
  background-color: #fff;
  height: 95%;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BodyContent = styled.div`
  width: 95%;
  height: 1050px;
  padding: 5px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  grid-column-gap: 20px;
  justify-content: center;
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 30px;
  min-width:1150px;
`;
export const ContainerInput = styled.div`
  /* background-color: red; */
  display: block;
  margin: 0 auto;
  width:500px;
  height: 95%;
  padding-top: 10px;
`;
export const Input = styled.input`
  display: block;
  width: 250px;
  font-size: 22px;
  margin: 10px auto;
  padding: 5px 0px 5px 30px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  color: #fff;
  border-style: none;
  border:none;
`;
export const Button = styled.button`
  /* font-size: 17px;
  display: block;
  padding: 9px 25px;
  border-radius: 40px;
  margin: 0 auto; */
  /* .................. */
  border:none;
  position:relative;
  display:inline-block;
  padding : 12px 36px;
  margin: 10px auto; 
  color:#fff;
  text-decoration:none;
  font-size:16px;
  letter-spacing:2px;
  border-radius:40px;
  
  background:linear-gradient(90deg,#f5c100,#ffeca9);
  &:hover{
    background:linear-gradient(90deg,#0162c8,#55e7fc);
  }
`;
