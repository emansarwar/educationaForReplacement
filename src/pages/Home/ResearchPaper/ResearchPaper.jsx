import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ResearchItem from "./ResearchItem";

const ResearchPaper = ({ item }) => {
  // const { name, image, price, recipe } = item;
  const [research, setResearch] = useState([]);
  useEffect(()=>{
    fetch('research.json')
    .then(res => res.json())
    .then(data => setResearch(data))
  },[])
const homeResearch = research.slice(0,6)
  return (
    <div>
      <SectionTitle
        heading="Our Researches"
        // subHeading="Our Colleges"
      ></SectionTitle>
      <div className="gap-10 grid md:grid-cols-2 m-2">
        {
            homeResearch.map(research=><ResearchItem
                key={research.id}
                research={research}
                />
            )
        }
      
      </div>
      
    </div>
  );
};

export default ResearchPaper;
