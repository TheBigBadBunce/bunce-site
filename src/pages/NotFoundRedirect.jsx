import { Navigate } from "react-router-dom";

// For any routes that aren't part of the site, redirect to the home page
const NotFoundRedirectPage = () => {
  return <Navigate replace to="/" />;
};

export default NotFoundRedirectPage;
