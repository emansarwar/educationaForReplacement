import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Sample data with 30+ colleges
const colleges = [ 
  { id: 1, name: "Harvard University", image: "https://via.placeholder.com/150", admissionDates: "Jan 1 - Apr 30", events: "Tech Summit, Science Expo", researchHistory: "Medical, AI", sports: "Basketball, Rowing" },
    { id: 2, name: "Stanford University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 2, name: "Rajshahi University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 2, name: "Jahangirnagar University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 2, name: "Dhaka University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 2, name: "Chittagong University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 3, name: "MIT", image: "https://via.placeholder.com/150", admissionDates: "Nov 1 - Feb 28", events: "Hackathon, Robotics", researchHistory: "Engineering, Robotics", sports: "Baseball, Fencing" },
    { id: 4, name: "University of Oxford", image: "https://via.placeholder.com/150", admissionDates: "Oct 1 - Jan 31", events: "Science Fair", researchHistory: "Humanities, Medicine", sports: "Cricket, Soccer" },
    { id: 5, name: "University of Cambridge", image: "https://via.placeholder.com/150", admissionDates: "Sep 1 - Dec 31", events: "Tech Carnival", researchHistory: "Physics, Biology", sports: "Rowing, Basketball" },
    { id: 6, name: "California Institute of Technology (Caltech)", image: "https://via.placeholder.com/150", admissionDates: "Oct 1 - Jan 15", events: "Engineering Expo", researchHistory: "Space Research", sports: "Tennis, Baseball" },
    { id: 7, name: "Princeton University", image: "https://via.placeholder.com/150", admissionDates: "Aug 1 - Nov 30", events: "Literary Fest", researchHistory: "Literature, Physics", sports: "Soccer, Swimming" },
    { id: 8, name: "Yale University", image: "https://via.placeholder.com/150", admissionDates: "Jul 1 - Oct 31", events: "Research Summit", researchHistory: "Law, Arts", sports: "Basketball, Baseball" },
    { id: 9, name: "Columbia University", image: "https://via.placeholder.com/150", admissionDates: "Jun 1 - Sep 30", events: "Health Summit", researchHistory: "Public Health", sports: "Rowing, Soccer" },
    { id: 10, name: "University of Chicago", image: "https://via.placeholder.com/150", admissionDates: "May 1 - Aug 31", events: "Econ Conference", researchHistory: "Economics", sports: "Tennis, Baseball" },
    { id: 11, name: "University of California, Berkeley", image: "https://via.placeholder.com/150", admissionDates: "Apr 1 - Jul 30", events: "Environment Summit", researchHistory: "Environmental Studies", sports: "Soccer, Swimming" },
    { id: 12, name: "University of Pennsylvania", image: "https://via.placeholder.com/150", admissionDates: "Mar 1 - Jun 30", events: "Business Expo", researchHistory: "Management Studies", sports: "Rowing, Football" },
    { id: 13, name: "Cornell University", image: "https://via.placeholder.com/150", admissionDates: "Feb 1 - May 31", events: "Tech Fair", researchHistory: "Veterinary, Biology", sports: "Lacrosse, Baseball" },
    { id: 14, name: "University of Michigan, Ann Arbor", image: "https://via.placeholder.com/150", admissionDates: "Jan 1 - Apr 30", events: "Medical Conference", researchHistory: "Healthcare", sports: "Basketball, Soccer" },
    { id: 15, name: "Duke University", image: "https://via.placeholder.com/150", admissionDates: "Feb 15 - May 15", events: "Art Exhibition", researchHistory: "Cancer Research", sports: "Tennis, Soccer" },
    { id: 16, name: "Northwestern University", image: "https://via.placeholder.com/150", admissionDates: "Jan 1 - Mar 30", events: "Film Festival", researchHistory: "Theater Studies", sports: "Basketball, Football" },
    { id: 17, name: "University of California, Los Angeles (UCLA)", image: "https://via.placeholder.com/150", admissionDates: "Apr 1 - Jul 15", events: "Movie Night", researchHistory: "Film and Television", sports: "Soccer, Basketball" },
    { id: 18, name: "Johns Hopkins University", image: "https://via.placeholder.com/150", admissionDates: "Feb 1 - May 31", events: "Medical Summit", researchHistory: "Healthcare", sports: "Swimming, Rowing" },
    { id: 19, name: "New York University (NYU)", image: "https://via.placeholder.com/150", admissionDates: "Mar 1 - Jun 15", events: "Fashion Week", researchHistory: "Media Studies", sports: "Tennis, Baseball" },
    { id: 20, name: "University of Southern California (USC)", image: "https://via.placeholder.com/150", admissionDates: "May 1 - Aug 31", events: "Tech Conference", researchHistory: "AI Research", sports: "Football, Swimming" },
    { id: 21, name: "University of Texas at Austin", image: "https://via.placeholder.com/150", admissionDates: "Mar 15 - Jun 30", events: "Engineering Fair", researchHistory: "Energy Studies", sports: "Soccer, Basketball" },
    { id: 22, name: "University of Washington", image: "https://via.placeholder.com/150", admissionDates: "May 1 - Aug 31", events: "Environmental Day", researchHistory: "Sustainability Research", sports: "Rowing, Tennis" },
    { id: 23, name: "Carnegie Mellon University", image: "https://via.placeholder.com/150", admissionDates: "Jan 1 - Apr 30", events: "AI Expo", researchHistory: "Computer Science", sports: "Basketball, Soccer" },
    { id: 24, name: "University of Toronto", image: "https://via.placeholder.com/150", admissionDates: "Feb 1 - May 15", events: "International Research Day", researchHistory: "Global Studies", sports: "Hockey, Soccer" },
    { id: 25, name: "McGill University", image: "https://via.placeholder.com/150", admissionDates: "Jan 15 - May 1", events: "Cultural Fair", researchHistory: "Arts and Humanities", sports: "Rowing, Football" },
    { id: 26, name: "University of British Columbia", image: "https://via.placeholder.com/150", admissionDates: "Feb 1 - Jun 1", events: "Tech Carnival", researchHistory: "Climate Research", sports: "Tennis, Basketball" },
    { id: 27, name: "Australian National University", image: "https://via.placeholder.com/150", admissionDates: "Mar 1 - Jun 15", events: "Culture Week", researchHistory: "Anthropology", sports: "Cricket, Soccer" },
    { id: 28, name: "University of Sydney", image: "https://via.placeholder.com/150", admissionDates: "Apr 1 - Jul 1", events: "Science Day", researchHistory: "Marine Studies", sports: "Rowing, Cricket" },
    { id: 29, name: "University of Melbourne", image: "https://via.placeholder.com/150", admissionDates: "May 1 - Aug 1", events: "Medical Innovations Day", researchHistory: "Healthcare Research", sports: "Basketball, Tennis" },
    { id: 30, name: "National University of Singapore (NUS)", image: "https://via.placeholder.com/150", admissionDates: "Feb 15 - May 31", events: "Tech Day", researchHistory: "Technology", sports: "Soccer, Rowing" },
    { id: 31, name: "Peking University", image: "https://via.placeholder.com/150", admissionDates: "Mar 1 - Jun 1", events: "Global Research Summit", researchHistory: "Cultural Studies", sports: "Ping Pong, Soccer" },
    { id: 32, name: "Tsinghua University", image: "https://via.placeholder.com/150", admissionDates: "Mar 15 - Jun 30", events: "Innovation Fair", researchHistory: "Engineering", sports: "Basketball, Badminton" },
    { id: 33, name: "ETH Zurich", image: "https://via.placeholder.com/150", admissionDates: "Feb 1 - May 1", events: "Engineering Summit", researchHistory: "Physics", sports: "Basketball, Badminton" },
    { id: 34, name: "Rajshahi University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 35, name: "Jahangirnagar University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 36, name: "Dhaka University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    { id: 37, name: "Chittagong University", image: "https://via.placeholder.com/150", admissionDates: "Dec 1 - Mar 15", events: "Startup Showcase", researchHistory: "Energy, Tech", sports: "Football, Tennis" },
    ];

    const Search = () => {
        const [searchTerm, setSearchTerm] = useState("");
        const [showList, setShowList] = useState(false);
        const searchRef = useRef(null);
      
        // Handle search input
        const handleSearch = (e) => {
          setSearchTerm(e.target.value.toLowerCase());
          setShowList(true); // Show the list while typing
        };
      
        // Filter colleges based on the search term
        const filteredColleges = colleges.filter((college) =>
          college.name.toLowerCase().includes(searchTerm)
        );
      
        // Handle clicks outside the search box
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
              setShowList(false); // Hide the list if clicked outside
            }
          };
      
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, []);
      
        return (
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>College Search</h1>
            <div ref={searchRef} style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search for a college..."
                value={searchTerm}
                onChange={handleSearch}
                onClick={() => setShowList(true)} // Show the list when clicking on the input
                style={{
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  marginBottom: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              {showList && searchTerm.trim() && (
                <div className=""
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: "0",
                    right: "0",
                    maxHeight: "300px",
                    overflowY: "auto",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    zIndex: "1000",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {filteredColleges.length > 0 ? (
                    filteredColleges.map((college) => (
                      <div className="bg-indigo-950 h-20"
                        key={college.id}
                        style={{
                          display: "flex",
                          padding: "10px",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <img className="border"
                          src={college.image}
                          alt={college.name}
                          style={{
                            width: "20%",
                            height: "50px",
                            borderRadius: "5px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                        />
                        <div className="ml-5 w-3/5">
                          <h3 style={{ margin: "0", fontSize: "16px" }}>{college.name}</h3>
                          <p style={{ margin: "5px 0", fontSize: "12px" }}>
                            Admission Dates: {college.admissionDates}
                          </p>
                        </div>
                        
                      </div>
                    ))
                  ) : (
                    <p style={{ padding: "10px", fontStyle: "italic", color: "#555" }}>
                      No colleges found.
                    </p>
                  )}
                  
                </div>
              )}
            </div>
          </div>
        );
      };
      
      export default Search;