import React from 'react';
import { GlobeSVG, GitHubSVG, LinkedInSVG } from '../svg/contact';
import LogoSVG from '../svg/logo';

const About = () => (
  <section className="main">
    <section className="about">
      <div className="about-logotype">
        <LogoSVG />
      </div>
      <div className="about-blurb">
        <span className="about-blurb-bold">Foton</span> is a single-page application clone of 500px, a website for sharing and discovering photos.
      </div>
      <div className="about-logo">
        <img src="https://i.imgur.com/qlxXw3z.png" />
      </div>
      <section className="about-content">
        <div className="about-description">
          The app uses React together with Redux on the front end and provides a Rails API with a PostgreSQL database in the back end. AWS S3 buckets handle photo storage.
          <br />
          Read more on <a href="https://github.com/agarun/foton">GitHub</a> or visit the author's portfolio:
        </div>
        <div className="about-links">
          <a href="https://agarun.com"><GlobeSVG /></a>
          <a href="https://github.com/agarun"><GitHubSVG /></a>
          <a href="https://www.linkedin.com/in/agarunov/"><LinkedInSVG /></a>
        </div>
      </section>
    </section>
  </section>
);

export default About;
