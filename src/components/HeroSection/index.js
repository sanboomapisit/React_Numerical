import React ,{ useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements' ;
import { HeroContainer , HeroBg ,VideoBg,
    HeroContent,HeroP,HeroH1,HeroBtnWrapper,ArrowForward,ArrowRight
} from './HeroElements'
const HeroSection = () => {
    const [hover,setHover] = useState(false);
    const onHover = ()=>{
        setHover(!hover);
    }
    
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Did you know Numerical Method?</HeroH1>
                <HeroP>
                    This web application will help you solve numerical method 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='Roots_of_Equations' onMouseEnter = {onHover} onMouseLeave={onHover}
                        primary="true" dark="true">
                        Get started {hover?<ArrowForward/>:<ArrowRight/>}</Button>
                    
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
