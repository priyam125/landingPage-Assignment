import React from "react";
import { useParams } from "react-router-dom";

const LandingPage = () => {
  const { id } = useParams();
  return <div>LandingPage : {id}</div>;
};

export default LandingPage;
