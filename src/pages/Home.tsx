import Welcome from "@/components/Home-Welcome"
import AboutMe from "@/components/Home-AboutMe"
import GlobalBrands from "@/components/Home-GlobalBrands"
import Testimonials from "@/components/Home-Testimonial"
import HomeWhyChosee from "@/components/Home-WhyChosee"
import Footer from "@/components/Footer"

const Home = () => {
   return(
      <div className="min-w-full bg-gradient-to-r from-[#94a6b3] via-[#f7f2e9] to-[#94a6b3] ] flex flex-col justify-center pt-24 items-center min-h-screen">
         <Welcome/>
         <GlobalBrands/>
         <Testimonials/>
         <HomeWhyChosee/>
         <AboutMe/>
         <Footer/>
      </div>
   )
}

export default Home;