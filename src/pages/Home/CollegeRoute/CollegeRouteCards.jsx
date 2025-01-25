import { Link } from "react-router-dom";

const CollegeRouteCards = ({ college }) => {
  const { college_name, image, admission_dates, events, sports, research_history } = college;
  return (
    <div className="flex space-x-2 bg-teal-900 p-2 rounded-3xl cyan-500">
      <div className="text-left">
        <img style={{ borderRadius: "20px  20px 0 0" }} className="w-full" src={image} alt="" />
        <div className="">
          <h3 className="font-bold text-red-400 text-xl uppercase">{college_name}</h3>
          <hr />

          <p>Events :{events[0]}, {events[1]}</p>
          <p className="">
            Researches :{research_history.notable_research[0]},{research_history.notable_research[1]}
          </p>

          <p className="font-bold">Sports :{sports[0]},{sports[1]}</p>
          <p className="font-bold text-red-400">Admission Deadline :{admission_dates.end}</p>
          {/* <PrivateRoute></PrivateRoute> */}
          <Link to="/details"
          state={{ college }}>
            <button className="w-full btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeRouteCards;
