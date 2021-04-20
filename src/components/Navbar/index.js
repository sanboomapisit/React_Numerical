import React,{useState,useEffect} from "react";
import { FaBars } from "react-icons/fa";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from "./NavbarElements";
// want signin import NavBtn,
// NavBtnLink
const Navbar = ({ toggle }) => {
	const [scrollNav,setScrollNav] = useState(false);
	const changeNav = () =>{
		if(window.scrollY >=80){
			setScrollNav(true);
		}else{
			setScrollNav(false);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll',changeNav)
	},[])
	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
					<NavLogo to="/">Home</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="Roots_of_Equations">Roots of Equations</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="Linear_Algibar">Linear Algibar</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="Interpolation">Interpolation</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="Regression">Regression</NavLinks>
						</NavItem>
					</NavMenu>
					{/* <NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn> */}
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
