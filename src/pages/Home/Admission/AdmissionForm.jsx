import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import { useVarsity } from "../../../providers/VarsityProvider";
// import useVarsity from "../../../hooks/useVarsity";
// import useAuth from "../../../hooks/useAuth";

const AdmissionForm = () => {
  // const { varsity, setVarsity } = useVarsity();

  const location = useLocation();
  // const auth = useAuth();
  // const user = auth.user;
  const { user } = useContext(AuthContext);
  const college = location.state?.college;
  const collegeName = college?.name;

  // useEffect(() => {
  //   if (data && data !== varsity) {
  //     setVarsity(data);
  //   }
  // }, [data, varsity, setVarsity]);
  // console.log("------",varsity)
  const navigate = useNavigate();
  console.log("admission user", user);
  console.log("admission user", user?.displayName);

  // console.log("admission user",auth?.user?.displayName);
  // if (user) {
  //   console.log("User Name:", user.displayName);
  //   console.log("User Email:", user.email);
  // } else {
  //   console.log("No user is logged in.");
  // }

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    subject: "",
    phone: "",
    dateOfBirth: "",
    image: null,
  });

  useEffect(() => {
    // Update form data when the user changes
    if (user) {
      setFormData((prevData) => ({
          ...prevData,
      displayName: user?.displayName || "",
      email: user?.email || "",
    }));
  }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    if (!user) {
      <button type="button" class="bg-indigo-500 ..." >
        <svg class="mr-3 animate-spin ... size-5" viewBox="0 0 24 24"></svg>
        User Loading…
      </button>;
    } else {
      e.preventDefault();
      // const admissionData = {
      //   name: formData.displayName, // Correctly use `formData` values
      //   email: formData.email,
      //   varsity: data,
      //   subject: formData.subject,
      //   phone: formData.phone,
      //   dateOfBirth: formData.dateOfBirth,
      // }
      const admissionData = {
        name: user?.displayName,
        email: user?.email,
        varsity: collegeName,
        ...formData, // Other form data like subject, phone, etc.
      };
      console.log("admission data", admissionData);
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(admissionData),
        });
        const postedInfo = await response.json();
        console.log("data for insert", postedInfo);
        // console.log("inserter id",insertedId);
        if (postedInfo.insertedId) {
          alert("Admission form submitted successfully!");
          navigate("/my-college");
        } else {
          alert("Failed to submit the form. User might already exist.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-teal-600 shadow-lg mx-auto mt-6 p-6 rounded-lg max-w-2xl">
      <h1 className="font-bold text-2xl text-center text-yellow-200">Admission Form for {collegeName || "Selected College"}</h1>
      <form className="space-y-6 mt-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium text-gray-700 text-sm">Candidate Name</label>
          <input
            type="text"
            readOnly
            name="displayName"
            // name="candidateName"
            value={user?.displayName}
            // value={formData.candidateName}
            onChange={handleChange}
            placeholder="Enter candidate's name"
            className="bg-slate-900 mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email}
            onChange={handleChange}
            readOnly
            className="mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 w-full"
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

        {/* <div>
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
        </div> */}

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
          className="bg-teal-500 hover:bg-teal-300 py-2 rounded-lg focus:ring-2 focus:ring-teal-600 w-full font-bold text-white btn-outline focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
