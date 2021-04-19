import React from 'react'
import { Button } from '../ButtonElements'
import DoubleSection from '../DoubleSection'
import  { InfoContainer , InfoWrapper , InfoRow ,TextWrapper,
     TopLine , Heading , Subtitle , BtnWrap , ImgWrap , Img
    ,Column1 , Column2
} from './infoElements'
const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline
                    ,darkText,descripttion,buttonLabel,img,alt,primary,dark,dark2,
                    lightBgCard,text
                    }) => {
    const tempDb = {lightBg,lightText,lightBgCard,text}
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}><DoubleSection {...tempDb}/></Subtitle>
                            {/* {descripttion} */}
                            <BtnWrap>
                                <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
