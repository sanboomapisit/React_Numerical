import React from "react";
import { SidebarContainer, Icon, CloseIcon ,
    SidebarWrapper,SidebarMenu,SidebarLink
} from "./SidebarElements";
// want signin import SideBtnWrap,SidebarRoute
const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Roots_of_Equations" onClick={toggle}>Roots of Equations</SidebarLink>
                    <SidebarLink to="Linear_Algibar" onClick={toggle}>Linear Algibar</SidebarLink>
                    <SidebarLink to="Interpolation" onClick={toggle}>Interpolation</SidebarLink>
                    <SidebarLink to="Regression" onClick={toggle}>Regression</SidebarLink>
                </SidebarMenu>
                {/* <SideBtnWrap>
                    <SidebarRoute to="/signin" >Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
