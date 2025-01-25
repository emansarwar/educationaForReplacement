import { Helmet } from "react-helmet-async";
// import Banner from "../Banner/Banner"
import Category from "../Category/Category";
// import Featured from "../Featured/Featured"

import Search from "../searchBox/search";
import ResearchPaper from "../ResearchPaper/ResearchPaper";
import CollegeRouteHome from "../CollegeRoute/CollegeRouteHome";
import Reviews from "../Reviews/Reviews";
// import PrivateRoute from "../../../Routes/PrivateRoute";
import useAuth from "../../../hooks/useAuth";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useAuth(AuthContext);

  return (
    <div className="bg-cyan-800">
      <Helmet>
        <title>Food Station | Home</title>
      </Helmet>
      <hr />
      <div className="mt-5 -mb-5">
        <Search></Search>
      </div>
      <hr className="mt-5 mb-5" />
      <CollegeRouteHome></CollegeRouteHome>
      <Category></Category>
      <ResearchPaper></ResearchPaper>
      {user ? <Reviews></Reviews> : <div className="divider"></div>}
    </div>
  );
};

export default Home;
