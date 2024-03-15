// import React, { useState } from "react";
// import NavLeft from "./components/NavLeft";

import { useState } from "react";
import NavLeft from "./components/NavLeft";

function App() {
  // Define state object to store form field values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    location: "",
    phone: "",
    email: "",
    experience: "",
    noOfClients: "",
    skills: "",
    previousWorkExp: "",
    blog: "",
  });
  const [state, setstate] = useState(false);
  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the formData state with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setstate(true);
    // Do something with the form data
    console.log("Submitted:", formData);
  };

  return (
    <div className="w-full h-screen flex bg-white">
      {/* <NavLeft /> */}

      {state ? (
        <NavLeft formData={formData} />
      ) : (
        <div className="new">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label>
            <br />
            <input
              type="text"
              id="fname"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input
              type="text"
              id="lname"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="position">Position:</label>
            <br />
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="location">Location:</label>
            <br />
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="phone">Phone:</label>
            <br />
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="experience">Experience:</label>
            <br />
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="noOfClients">Number of Clients:</label>
            <br />
            <input
              type="number"
              id="noOfClients"
              name="noOfClients"
              value={formData.noOfClients}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="skills">Skills:</label>
            <br />
            <input
              type="text"
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="previousWorkExp">Previous Work Experience:</label>
            <br />
            <input
              type="text"
              id="previousWorkExp"
              name="previousWorkExp"
              value={formData.previousWorkExp}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="blog">Blog:</label>
            <br />
            <input
              type="text"
              id="blog"
              name="blog"
              value={formData.blog}
              onChange={handleInputChange}
            />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
