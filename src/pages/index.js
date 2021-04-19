import React ,{ useState}from 'react'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infoSection';
// import DoubleSection from '../components/DoubleSection'
import { homeObjOne ,homeObjTwo ,homeObjFour,homeObjThree} from '../components/infoSection/Data';
const Home = () => {
    const [isOpen,setIsOpen]= useState(false);
    const toggle=()=>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            {/* <DoubleSection/> */}
            <InfoSection {...homeObjFour}/>
            
        </>
    )
}

export default Home
