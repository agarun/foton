import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <section
    className={`landing-image landing-image-${Math.floor(Math.random() * 5 + 1)}`}
  >
    <section className="landing-center">
      <h1>Find inspiration and showcase your work</h1>
      <h2>A community for everyone's best photos</h2>
      <Link
        className="landing-button"
        to="/signup"
      >
        Join Foton
      </Link>
  </section>
  </section>
);

export default LandingPage;
