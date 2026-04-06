import { Helmet } from "react-helmet-async";
import React from "react";
import { Link } from "react-router";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Fan SoundZzz</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="not-found-page">
        <h1>Page Not Found</h1>
        <p>THIS AIn'T NO PAGE!</p>
        <Link to="/">Return to Home</Link>
      </div>
    </>
  );
};

export default NotFoundPage;
