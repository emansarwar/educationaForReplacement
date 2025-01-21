import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CollegeRouteCards from "./CollegeRouteCards";

const CollegeRoute = ({ item }) => {
  
  const [college, setCollege] = useState([]);
  useEffect(()=>{
    fetch('college.json')
    .then(res => res.json())
    .then(data => setCollege(data))
  },[])
// const homeCollege = college.slice(0,3)
  return (
    <div className="">
      <SectionTitle className=""
        heading="Our Colleges"
        // subHeading="Our Colleges"
      ></SectionTitle>
      <div className="gap-10 grid md:grid-cols-3 m-2">
        {
            college.map(college=><CollegeRouteCards
                key={college.id}
                college={college}
                />
            )
        }
      
      </div>
      
    </div>
  );
};

export default CollegeRoute;
