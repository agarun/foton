import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <section className="main">
    <section className="page-not-found">
      <img src="https://i.imgur.com/IVcx7v4.png" width="200" />
      <h1>404!? Oops!</h1>
      <h1>Sorry, the page wasn't found.</h1>
      <section className="page-not-found-links">
        <p>Potentially helpful links:</p>
        <Link to="/about">About</Link>
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/">Home</Link>
        <Link to="/discover">Discover</Link>
      </section>
    </section>
  </section>
);

export default PageNotFound;
