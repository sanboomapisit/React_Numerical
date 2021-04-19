import styled from "styled-components";
import { Link } from "react-router-dom";
import BGpicture from "../../images/BGpages.jpg";
export const Nav = styled.nav`
  background-color: #010606;
  height: 80px;
  /* margin-top:-80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  /* @media screen and(max-width:960px){
        transition:0.8s all ease;
    } */
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const Container = styled.div`
  /* padding:40px 100px; */
  height: 850px;
  width: 100%;
  max-width: 1200px;
  display: block;
  margin: 0 auto;
  /* background-color:green; */
`;
export const BackGround = styled.div`
  background: url(${BGpicture});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 1200px;
  /* padding-top:40px; */
  z-index: 1;
`;
export const Paper = styled.div`
  width: 100%;
  height: 1200px;
  z-index: 2;
  padding-top: 40px;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const TitleName = styled.div`
  /* width: 450px; */
  /* background-color: rgba(0, 0, 0, 0.6); */
  background:linear-gradient(90deg,#f5c100,#ffeca9);
  padding: 10px;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 35px;
  text-align: center;
`;
