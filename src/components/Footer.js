import React from "react";

function Footer({ text, backgroundColor }) {
  const footerStyle = {
    backgroundColor: backgroundColor || "gray",
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full" style={footerStyle}>
      <div className="container mx-auto p-4">
        <p className="text-center text-gray-600">
          &copy; {`2023 ${text ? text : "Your Brand"}. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
