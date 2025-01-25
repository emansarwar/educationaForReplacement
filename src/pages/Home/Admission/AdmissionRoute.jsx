import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Profile from "../Profile/Profile";


const AdmissionRoute = () => {
  const [admissionData, setAdmissionData] = useState([]);

  useEffect(() => {
    fetch("admissionData.json")
      .then((res) => res.json())
      .then((data) => setAdmissionData(data));
  }, []);
  

  return (
    <div className="flex flex-col items-center space-y-4 bg-teal-900 p-6 text-center text-white">
      <h1 className="font-bold text-2xl">Select a College</h1>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
        {admissionData.map((college) => (
          <Link
            key={college.id}
            to={`/admission/${college.id}`}
            state={{ college }}
          >
            
           
            <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg w-full font-semibold text-white">
              {college.name}
            </button>
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default AdmissionRoute;
