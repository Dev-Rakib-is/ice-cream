
import Hero from '../component/section/aboutUs/Hero'
import OurMission from '../component/section/aboutUs/OurMission'
import OurJourney from '../component/section/aboutUs/OurJourney'
import AboutSlider from '../component/section/aboutUs/AboutSlider'
import Login from "../component/section/home/Login"
import Statistics from '../component/section/aboutUs/Statistics'

const About = () => {
  return (
   <>
   <Hero/>
   <OurJourney/>
   <OurMission/>
   <Statistics/>
   <AboutSlider/>
   <Login/>
   </>
  )
}

export default About