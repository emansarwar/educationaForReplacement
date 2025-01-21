import { Helmet } from "react-helmet-async"
// import Banner from "../Banner/Banner"
import Category from "../Category/Category"
// import Featured from "../Featured/Featured"
import PopularMenu from "../PopularMenu/PopularMenu"
import Testimonial from "../Testimonial/Testimonial"
import Search from "../searchBox/search"
import ResearchPaper from "../ResearchPaper/ResearchPaper"
import CollegeRouteHome from "../CollegeRoute/CollegeRouteHome"
import Reviews from "../Reviews/Reviews"


const Home = () => {
  return (
    <div className="bg-cyan-800">
      <Helmet>
            <title>Food Station | Home</title>
        </Helmet>
       
        <hr />
        <div className="mt-5 -mb-5"> <Search></Search></div>
      {/* <Banner></Banner> */}
      <hr className="mt-5 mb-5" />
      <CollegeRouteHome></CollegeRouteHome>
      {/* <PopularMenu></PopularMenu> */}
      <Category></Category>
      
      {/* <Featured></Featured> */}
      <ResearchPaper></ResearchPaper>
      {/* <Testimonial></Testimonial> */}
      <Reviews></Reviews>
    </div>
  )
}

export default Home