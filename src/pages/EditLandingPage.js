import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const [landingPage, setLandingPage] = useState({
    title: "",
    description: "",
    components: [],
    headerTitle: "",
    headerBackgroundColor: "",
    footerText: "",
    footerBackgroundColor: "",
  });

  useEffect(() => {
    // Load landing page data for the specified id from storage
    const loadedLandingPage = localStorage.getItem("landingPages") || "[]";
    const landingPages = JSON.parse(loadedLandingPage);
    const selectedLandingPage = landingPages.find(
      (page) => page.id === parseInt(id, 10)
    );

    if (selectedLandingPage) {
      setLandingPage(selectedLandingPage);
    }
  }, [id]);

  const handleSave = () => {
    // Update the landing page in storage
    const loadedLandingPage = localStorage.getItem("landingPages") || "[]";
    const landingPages = JSON.parse(loadedLandingPage);

    const updatedLandingPages = landingPages.map((page) => {
      if (page.id === landingPage.id) {
        return landingPage;
      } else {
        return page;
      }
    });

    localStorage.setItem("landingPages", JSON.stringify(updatedLandingPages));
  };

  useEffect(() => {
    console.log(landingPage);
  });

  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Edit Landing Page</h1>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">Title:</label>
        <input
          className="border rounded w-full py-2 px-3"
          type="text"
          name="title"
          value={landingPage.title}
          onChange={(e) =>
            setLandingPage({ ...landingPage, title: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">Description:</label>
        <input
          className="border rounded w-full py-2 px-3"
          type="text"
          name="description"
          value={landingPage.description}
          onChange={(e) =>
            setLandingPage({ ...landingPage, description: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">Components:</label>
        <div>
          <input
            type="checkbox"
            name="components"
            value="Header"
            checked={(landingPage.components || []).includes("Header")}
            onChange={(e) => {
              const { checked } = e.target;
              const updatedComponents = checked
                ? [...(landingPage.components || []), "Header"]
                : (landingPage.components || []).filter(
                    (component) => component !== "Header"
                  );
              setLandingPage({ ...landingPage, components: updatedComponents });
            }}
          />
          <label className="ml-2">Header</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="components"
            value="Footer"
            checked={(landingPage.components || []).includes("Footer")}
            onChange={(e) => {
              const { checked } = e.target;
              const updatedComponents = checked
                ? [...(landingPage.components || []), "Footer"]
                : (landingPage.components || []).filter(
                    (component) => component !== "Footer"
                  );
              setLandingPage({ ...landingPage, components: updatedComponents });
            }}
          />
          <label className="ml-2">Footer</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="components"
            value="TextBlock"
            checked={(landingPage.components || []).includes("TextBlock")}
            onChange={(e) => {
              const { checked } = e.target;
              const updatedComponents = checked
                ? [...(landingPage.components || []), "TextBlock"]
                : (landingPage.components || []).filter(
                    (component) => component !== "TextBlock"
                  );
              setLandingPage({ ...landingPage, components: updatedComponents });
            }}
          />
          <label className="ml-2">Text Block</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="components"
            value="Image"
            checked={(landingPage.components || []).includes("Image")}
            onChange={(e) => {
              const { checked } = e.target;
              const updatedComponents = checked
                ? [...(landingPage.components || []), "Image"]
                : (landingPage.components || []).filter(
                    (component) => component !== "Image"
                  );
              setLandingPage({ ...landingPage, components: updatedComponents });
            }}
          />
          <label className="ml-2">Image</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">Header Title:</label>
        <input
          className="border rounded w-full py-2 px-3"
          type="text"
          name="headerTitle"
          value={landingPage.headerTitle}
          onChange={(e) =>
            setLandingPage({ ...landingPage, headerTitle: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">
          Header Background Color:
        </label>
        <input
          className="border rounded w-full py-2 px-3"
          type="color"
          name="headerBackgroundColor"
          value={landingPage.headerBackgroundColor}
          onChange={(e) =>
            setLandingPage({
              ...landingPage,
              headerBackgroundColor: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">Footer Text:</label>
        <input
          className="border rounded w-full py-2 px-3"
          type="text"
          name="footerText"
          value={landingPage.footerText}
          onChange={(e) =>
            setLandingPage({ ...landingPage, footerText: e.target.value })
          }
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 font-bold">
          Footer Background Color:
        </label>
        <input
          className="border rounded w-full py-2 px-3"
          type="color"
          name="footerBackgroundColor"
          value={landingPage.footerBackgroundColor}
          onChange={(e) =>
            setLandingPage({
              ...landingPage,
              footerBackgroundColor: e.target.value,
            })
          }
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default EditPage;
