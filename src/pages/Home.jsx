import Hero from '../component/section/home/Hero'
import Menu from '../component/section/home/Menu'
import CategorySection from '../component/section/home/CategorySection'
import Flaver from "../component/section/home/Flaver"
import SummerOffer from '../component/section/home/SummerOffer'
import Review from '../component/section/home/Review'
import BestSaller from '../component/section/home/BestSaller'
import Login from '../component/section/home/Login'
import FollowInstagram from '../component/section/home/FollowInstagram'

const Home = () => {
  return (
    <>
    <Hero/>
    <Menu/>
    <Flaver/>
    <CategorySection/>
    <SummerOffer/>
    <BestSaller/>
    <Review/>
    <Login/>
    <FollowInstagram/>
    </>
  )
}

export default Home