import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ViewLandingPage() {
  const { id } = useParams();
  const [landingPage, setLandingPage] = useState(null);

  useEffect(() => {
    const loadedLandingPage = localStorage.getItem("landingPages") || "[]";
    const landingPages = JSON.parse(loadedLandingPage);
    const selectedLandingPage = landingPages.find(
      (page) => page.id === parseInt(id, 10)
    );

    if (selectedLandingPage) {
      setLandingPage(selectedLandingPage);
      console.log(selectedLandingPage);
    }
  }, [id]);

  if (!landingPage) {
    return <div>Landing Page not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-4">
      {console.log(landingPage)}
      <Header
        title={landingPage.headerTitle || ""}
        backgroundColor={landingPage.headerBackgroundColor || ""}
      />

      <h1 className="text-2xl font-bold mb-4">{landingPage.title}</h1>
      <div>{landingPage.description}</div>

      <Footer
        text={landingPage.footerText || ""}
        backgroundColor={landingPage.footerBackgroundColor || ""}
      />

      <Link to="/dashboard">
        <button className="bg-blue-500 text-white p-2 rounded mt-4">
          Back to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default ViewLandingPage;
