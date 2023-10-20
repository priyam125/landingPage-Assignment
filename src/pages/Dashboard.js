import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    const newId = landingPages.length + 1;
    const newLandingPage = { id: newId, ...formData, isPublished: false };
    const updatedLandingPages = [...landingPages, newLandingPage];
    localStorage.setItem("landingPages", JSON.stringify(updatedLandingPages));
    setLandingPages(updatedLandingPages);
    setFormData({ title: "", description: "", components: [] });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    const updatedComponents = [...formData.components];

    if (updatedComponents.includes(value)) {
      updatedComponents.splice(updatedComponents.indexOf(value), 1);
    } else {
      updatedComponents.push(value);
    }

    setFormData({ ...formData, components: updatedComponents });
  };

  const handleEditLandingPage = (id) => {
    navigate(`/landingpage/edit/${id}`);
  };

  const handleDeleteLandingPage = (id) => {
    const updatedPages = landingPages.filter((page) => page.id !== id);
    localStorage.setItem("landingPages", JSON.stringify(updatedPages));
    setLandingPages(updatedPages);
  };

  const availableComponents = ["Header", "Footer", "TextBlock", "Image"];

  const publishedLandingPages = landingPages.filter(
    (landingPage) => landingPage.isPublished
  );

  const unpublishedLandingPages = landingPages.filter(
    (landingPage) => !landingPage.isPublished
  );

  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="flex">
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-2">
            Live Landing Pages
          </h2>
          <ul>
            {publishedLandingPages.map((landingPage) => (
              <li key={landingPage.id}>
                <strong>{landingPage.title}</strong> - {landingPage.description}
                <div>
                  <Link to={`/landingpage/${landingPage.id}`}>
                    <button className="bg-blue-500 text-white p-2 rounded mr-2">
                      View
                    </button>
                  </Link>
                  <button
                    className="bg-yellow-400 text-white p-2 rounded mr-2"
                    onClick={() => handleEditLandingPage(landingPage.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => handleDeleteLandingPage(landingPage.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 pl-4">
          <h2 className="text-xl font-semibold mb-2">
            Unpublished Landing Pages
          </h2>
          <ul>
            {unpublishedLandingPages.map((landingPage) => (
              <li key={landingPage.id}>
                <strong>{landingPage.title}</strong> - {landingPage.description}
                <div>
                  <Link to={`/landingpage/${landingPage.id}`}>
                    <button className="bg-blue-500 text-white p-2 rounded mr-2">
                      View
                    </button>
                  </Link>
                  <button
                    className="bg-yellow-400 text-white p-2 rounded mr-2"
                    onClick={() => handleEditLandingPage(landingPage.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded"
                    onClick={() => handleDeleteLandingPage(landingPage.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Create a New Landing Page</h2>
      <form>
        <div className="mb-2">
          <label className="block text-gray-600 font-bold">Title:</label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-bold">Description:</label>
          <input
            className="border rounded w-full py-2 px-3"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 font-bold">Components:</label>
          {availableComponents.map((component) => (
            <div key={component}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                  name="components"
                  value={component}
                  checked={formData.components.includes(component)}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2">{component}</span>
              </label>
            </div>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded w-full"
          type="button"
          onClick={handleCreateLandingPage}
        >
          Create Landing Page
        </button>
      </form>
    </div>
  );
}

export default Dashboard;
