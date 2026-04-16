import CategoryCarousel from "./CategoryCarousel"
import Footer from "./Footer"
import HeroSection from "./HeroSection"
import LatestJob from "./LatestJob"
import Navbar from "./shared/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
       <CategoryCarousel/>
       <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home
