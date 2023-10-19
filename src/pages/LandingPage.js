// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// function ViewLandingPage() {
//   const { id } = useParams();
//   const [landingPage, setLandingPage] = useState(null);

//   useEffect(() => {
//     // Load landing page data for the specified id from storage
//     const loadedLandingPage = localStorage.getItem("landingPages") || "[]";
//     const landingPages = JSON.parse(loadedLandingPage);
//     const selectedLandingPage = landingPages.find(
//       (page) => page.id === parseInt(id, 10)
//     );

//     if (selectedLandingPage) {
//       setLandingPage(selectedLandingPage);
//     }
//   }, [id]);

//   if (!landingPage) {
//     // Handle the case where the landing page with the given ID is not found
//     return <div>Landing Page not found.</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 mt-4">
//       <h1 className="text-2xl font-bold mb-4">View Landing Page</h1>
//       <div>
//         <label className="block text-gray-600 font-bold">Title:</label>
//         <div>{landingPage.title}</div>
//       </div>
//       <div>
//         <label className="block text-gray-600 font-bold">Description:</label>
//         <div>{landingPage.description}</div>
//       </div>
//       <div>
//         <label className="block text-gray-600 font-bold">Components:</label>
//         <div>
//           {landingPage && landingPage.components ? (
//             landingPage.components.map((component) => (
//               <div key={component}>{component}</div>
//             ))
//           ) : (
//             <div>No components found.</div>
//           )}
//         </div>
//       </div>
//       <Link to="/dashboard">
//         <button className="bg-blue-500 text-white p-2 rounded mt-4">
//           Back to Dashboard
//         </button>
//       </Link>
//     </div>
//   );
// }

// export default ViewLandingPage;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ViewLandingPage() {
  const { id } = useParams();
  const [landingPage, setLandingPage] = useState(null);

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

  if (!landingPage) {
    // Handle the case where the landing page with the given ID is not found
    return <div>Landing Page not found.</div>;
  }

  const hasHeader = landingPage.components && landingPage.components.includes("Header");
  const hasFooter = landingPage.components && landingPage.components.includes("Footer");

  return (
    <div className="container mx-auto px-4 mt-4">
      {hasHeader && <Header />}
      <h1 className="text-2xl font-bold mb-4">{landingPage.title}</h1>
      <div>{landingPage.description}</div>
      {hasFooter && <Footer />}
      <Link to="/dashboard">
        <button className="bg-blue-500 text-white p-2 rounded mt-4">
          Back to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default ViewLandingPage;

