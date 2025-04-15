import Footer from "../../components/footer/Footer"
import ExtraOrderSection from "../../components/extraOrderSection/ExtraOrderSection"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import Testimonials from "@/components/testimonials/Testimonials"
import Products from "../products/Products"
import Collections from "@/components/collections/Collections"
import Banner from "@/components/banner/Banner"

function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Banner/>
      <Collections/>
      <Products/>
      <Testimonials/>
      <ExtraOrderSection/>
      <Footer/>
    </div>
  )
}

export default Home
