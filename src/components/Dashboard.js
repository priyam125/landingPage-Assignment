import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { landingPagesState } from "../store/recoil";

function Dashboard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    components: [],
  });
  const [landingPages, setLandingPages] = useState([]);

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("landingPages")) || [];
    setLandingPages(existingData);
  }, []);

  function handleCreateLandingPage() {
    // Create a new landing page using the form data
    const newId = landingPages.length + 1;
    const newLandingPage = { id: newId, ...formData };

    // Add the new landing page to the array
    setLandingPages([...landingPages, newLandingPage]);

    // Update the localStorage with the new data
    localStorage.setItem("landingPages", JSON.stringify(landingPages));

    // Clear the form
    setFormData({ title: "", description: "", components: [] });
  }

  // Update the form data as the user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <div className="landing-pages-list">
          <h2>Landing Pages</h2>
          <ul>
            {landingPages.map((landingPage) => (
              <li key={landingPage.id}>
                <strong>{landingPage.title}</strong> - {landingPage.description}
                <div>
                  <Link to={`/landingpage/${landingPage.id}`}>
                    <button>View</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="landing-page-form">
          <h2>Create a New Landing Page</h2>
          <form>
            <div>
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Description: </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Components: </label>
              <select
                name="components"
                multiple
                value={formData.components}
                onChange={handleInputChange}
              >
                <option value="Header">Header</option>
                <option value="Footer">Footer</option>
                <option value="TextBlock">Text Block</option>
                <option value="Image">Image</option>
              </select>
            </div>
            <button type="button" onClick={handleCreateLandingPage}>
              Create Landing Page
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
