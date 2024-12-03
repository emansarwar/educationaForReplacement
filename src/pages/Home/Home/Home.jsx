import { Helmet } from "react-helmet-async"
import Banner from "../Banner/Banner"
import Category from "../Category/Category"
import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"
import Testimonial from "../Testimonial/Testimonial"


const Home = () => {
  return (
    <div className="bg-cyan-800">
      <Helmet>
            <title>Food Station | Home</title>
        </Helmet>
      <Banner></Banner>
      <hr className="mt-5 mb-5" />
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home