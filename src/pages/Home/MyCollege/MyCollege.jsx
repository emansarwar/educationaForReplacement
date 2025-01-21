import React, { useState } from "react";

const MyCollege = () => {
  const [myColleges, setMyColleges] = useState(JSON.parse(localStorage.getItem("myCollege")) || []);
  const [reviewData, setReviewData] = useState({ name: "", review: "", rating: "" });

  const handleReviewSubmit = (collegeId) => {
    if (!reviewData.name.trim() || !reviewData.review.trim() || !reviewData.rating) {
      alert("Please fill in all fields.");
      return;
    }
    if (reviewData.rating < 1 || reviewData.rating > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    const updatedColleges = myColleges.map((college, index) =>
      index === collegeId
        ? {
            ...college,
            reviews: [
              ...(college.reviews || []),
              { name: reviewData.name, review: reviewData.review, rating: reviewData.rating },
            ],
          }
        : college
    );
    setMyColleges(updatedColleges);
    localStorage.setItem("myCollege", JSON.stringify(updatedColleges));
    setReviewData({ name: "", review: "", rating: "" });
    alert("Review added successfully!");
  };

  return (
    <div className="bg-indigo-400 mt- p-6">
      <h1 className="font-bold text-2xl text-center text-gray-900">My Colleges</h1>
      <div className="space-y-6 mt-4">
        {myColleges.map((college, index) => (
          <div key={index} className="grid grid-cols-1 bg-emerald-900 shadow-lg p-4 rounded-lg">
            <div className="grid md:grid-cols-2">
              <div className="mr-4">
                <h2 className="font-bold text-xl">college name:{college.name}</h2>
                <h2 className="font-bold text-xl">user name:{college.candidateName}</h2>
                <p>
                  <strong>Subject:</strong> {college.subject}
                </p>
                <p>
                  <strong>Email:</strong> {college.email}
                </p>
                <p>
                  <strong>Phone:</strong> {college.phone}
                </p>
                <p>
                  <strong>Address:</strong> {college.address}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {college.dateOfBirth}
                </p>
              </div>
              <div className="gap-2 grid grid-cols-1 w-full">
                <div className="flex gap-2 w-full">
                  <div className="w-1/2">
                    <h3 className="mt-4 md:mt-0 font-semibold text-xl">Add a Review</h3>
                    <input
                      type="text"
                      className="mt-1 p-2 border rounded-lg w-full"
                      placeholder="Your Name"
                      value={reviewData.name}
                      onChange={(e) => setReviewData({ ...reviewData, name: e.target.value })}
                    />
                    <textarea
                      className="mt-2 p-2 border rounded-lg w-full"
                      placeholder="Write your review"
                      value={reviewData.review}
                      onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="mt-0 w-1/4">
                    <h3 className="mt-4 md:mt-0 mb-1 font-semibold text-xl">Rating (1-5):</h3>
                    <input
                      type="number"
                      className="p-2 border rounded-lg w-20"
                      min="1"
                      max="5"
                      value={reviewData.rating}
                      onChange={(e) => setReviewData({ ...reviewData, rating: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  onClick={() => handleReviewSubmit(index)}
                  className="bg-teal-500 hover:bg-teal-600 m-2 px-4 py-2 rounded-lg text-white"
                >
                  Submit Review
                </button>
              </div>
            </div>
            <hr />
            <div>
              {college.reviews && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">Reviews</h3>
                  {college.reviews.map((review, i) => (
                    <p key={i} className="mt-2">
                      <strong>{review.name}</strong> ({review.rating}/5): {review.review}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
