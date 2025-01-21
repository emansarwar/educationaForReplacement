import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CollegeRouteCards from "./CollegeRouteCards";
import { Link } from "react-router-dom";

const CollegeRouteHome = ({ item }) => {
  
  const [college, setCollege] = useState([]);
  useEffect(()=>{
    fetch('college.json')
    .then(res => res.json())
    .then(data => setCollege(data))
  },[])
const homeCollege = college.slice(0,3)
  return (
    <div className="text-center">
      <SectionTitle
        heading="Our Colleges"
        // subHeading="Our Colleges"
      ></SectionTitle>
      <div className="gap-10 grid md:grid-cols-3 m-2">
        {
            homeCollege.map(college=><CollegeRouteCards
                key={college.id}
                college={college}
                />
            )
        }
      
      </div>
      <Link to="/collegeRoute">
      <button className="border-1 mt-4 border-b-4 w-1/2 btn btn-outline">View all Colleges</button>
      </Link>
      
    </div>
  );
};

export default CollegeRouteHome;
