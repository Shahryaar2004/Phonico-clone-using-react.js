
import './App.css'
import Navbar from './Navbar/Navbar'
import HeroSection from './Hero/HeroSection'
import Features from './fetaures/Features'
import Coverage from './Coverage/Coverage'
import DataPlans from './plans/PlansSection'
import TravelWithPhonico from './travel/TravelWithPhonico'
import PhonicoSteps from './steps/PhonicoSteps'
import WhyChoosePhonico from './Why/WhyChoosePhonico'
import SolutionsComponent from './Sol/SolutionsComponents'
import AppDownloadSection from './AppDown/AppDownloadSection'
import Testimonials from './Testimonials/Testimonials'
import Subscribe from './Sub/Subscribe'
import Footer from './Footer/Footer'

function App() {
  

  return (
    <>
    <Navbar buttonName = "Props Register" />
    <HeroSection/>
    <Features/>
    <Coverage/>
    <DataPlans/>
    <TravelWithPhonico/>
    <PhonicoSteps/>
    <WhyChoosePhonico/>
    <SolutionsComponent/>
    <AppDownloadSection/>
    <Testimonials/>
    <Subscribe/>
    <Footer/>
   
    </>
  )
}

export default App
