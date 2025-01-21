// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CollegeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const college = location.state?.college;

  useEffect(() => {
    if (!college) {
      navigate("/", { replace: true }); // Redirect to the home page
    }
  }, [college, navigate]);

  if (!college) {
    <p>Loading or redirecting...</p>;
  }

  const { college_name, image, admission_dates, events, sports, research_history } = college;

  return (
    <div className="bg-green-900 mt-10 p-5 border rounded-3xl">
      <div className="md:flex items-center space-x-4">
        <div className="md:w-1/2">
        <img style={{borderRadius: "30px 0 0 30px"}} className="w-full md:h-full" src={image} alt={`${college_name} Image`} />
        </div>
        <div class="bg-slate-900 w-[3px] md:h-full md:h-[280px] lg:h-[360px]" ></div>
        <div  className="md:w-1/2">
          <h1 className="font-bold text-2xl text-red-300">{college_name}</h1>
          <p>
            <strong>Admission Dates:</strong> {admission_dates.start} to {admission_dates.end}
          </p>
          <p>
            <strong>Events:</strong> {events.join(", ")}
          </p>
          <p>
            <strong>Research History:</strong>
          </p>
          <ul>
            {research_history.notable_research.map((research, index) => (
              <li key={index}>{research}</li>
            ))}
          </ul>
          <p>
            <strong>Sports:</strong> {sports.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
