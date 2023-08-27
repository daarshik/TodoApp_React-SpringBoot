import React from "react";
import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { username } = useParams();
  return (
    <div className="Welcome">
      <h1>Welcome! {username}</h1>
      <div>Manage your todos. <Link to="/todos">Go here</Link></div>
    </div>
  );
};

export default WelcomeComponent;
