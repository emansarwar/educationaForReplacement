import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const AdmissionForm = () => {
  const location = useLocation();
  
  const college = location.state?.college;
  const data = college.name;
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    candidateName: "",
    subject: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const storedData = JSON.parse(localStorage.getItem("myCollege")) || [];
    localStorage.setItem("myCollege", JSON.stringify([...storedData, formData]));
    alert("Admission form submitted successfully!");
    navigate("/my-college");
  };

  return (
    <div className="bg-teal-600 shadow-lg mx-auto mt-6 p-6 rounded-lg max-w-2xl">
      <h1 className="font-bold text-2xl text-center text-yellow-200">
        Admission Form for {college?.name || "Selected College"}
      </h1>
      <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium text-gray-700 text-sm">Candidate Name</label>
          <input
          
            type="text"
            name="candidateName"
            value={college?.candidateName}
            // value={formData.candidateName}
            onChange={handleChange}
            placeholder="Enter candidate's name"
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            rows="3"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 text-sm">Upload Candidate Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 py-2 rounded-lg focus:ring-2 focus:ring-teal-600 w-full font-bold text-white focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
