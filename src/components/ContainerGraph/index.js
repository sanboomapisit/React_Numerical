import React from 'react'
import { Nav, NavbarContainer , NavLogo ,Container ,TitleName  , BackGround , Paper} from './NavTopPage'
const Pages = ({title,Items}) => {
    return (
        <>
           <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Home</NavLogo>
                </NavbarContainer>
           </Nav>
           
            <BackGround>
            <Paper>

                <Container>
                    <TitleName>{title}</TitleName>
                    {Items}
                </Container>
            </Paper>
           </BackGround>
           
           
        </>
    )
}

export default Pages
