import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("myCollege")) || [];
    const allReviews = storedData.flatMap((college) => (college.reviews ? college.reviews : []));
    setReviews(allReviews);
  }, []);

  return (
    <div className="bg-teal-700 p-6 rounded-t-2xl">
      <h1 className="font-bold text-2xl text-center">Reviews</h1>
      <div className="space-y-4 grid md:grid-cols-2 mt-4">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="bg-violet-900 shadow-lg m-2 p-4 rounded-lg text-center">
              {/* <p>
                <strong>:</strong> {review.name}
              </p> */}

              <p>{review.review}</p>

              <p>
                <strong>Rating:</strong> {review.rating}
              </p>
              <p>
                {review.name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
