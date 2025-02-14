// import { Link } from "react-router-dom";
import Header from "../Header";

import "./index.css";

const Projects = () => {
  return (
    <>
      <Header />
      <p className="portfolio-heading">My Projects</p>
      <div className="projects-container">
        <div className="project-card">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png"
            alt="Project 2"
            className="project-image"
          />
          <h3 className="project-title-heading">
            <a href="https://foodwebsitedizn.ccbp.tech/" className="anchor-el">
              Food Munch
            </a>
          </h3>
          <p className="project-description">
            A fully responsive and visually appealing restaurant website built
            using HTML, CSS, and Bootstrap.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/PrathibhaGera/FoodMunchWebsite"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png"
            alt="Project 3"
            className="project-image"
          />
          <a
            href="https://iplt20league.ccbp.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="anchor-el"
          >
            <h3 className="project-title-heading">IPL Dashboard</h3>
          </a>
          <p className="project-description">
            A dynamic IPL Dashboard built using React.js and Node.js, providing
            real-time team insights and match details.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/PrathibhaGera/ipl-match-dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://res.cloudinary.com/drdkzqqhn/image/upload/v1689416784/abstract-futuristic-background-with-3d-design_guwixr.jpg"
            alt="Project 3"
            className="project-image"
          />

          <h3 className="project-title-heading">
            <a
              href="https://xplorpublishing.ccbp.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-el"
            >
              Explore Journals
            </a>
          </h3>

          <p className="project-description">
            A fully responsive scientific publishing website built with HTML,
            CSS, and Bootstrap.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/PrathibhaGera/Explore-webpage"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-el"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://res.cloudinary.com/drdkzqqhn/image/upload/v1731178222/join_us_image_h0icjb.jpg"
            alt="Project 3"
            className="project-image"
          />
          <h3 className="project-title-heading">
            <a
              href="https://shipleefranchisewebsite.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-el"
            >
              Shiplee Franchis Website
            </a>
          </h3>
          <p className="project-description">
            A fully responsive shipping website built using HTML, CSS, and
            JavaScript, enabling users to track shipments,
          </p>
          <div className="project-links">
            <a
              href="https://github.com/PrathibhaGera/FranchisWebsite"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-el"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
            alt="Project 1"
            className="project-image"
          />

          <h3 className="project-title-heading">
            <a
              href="https://myecomshopweb.ccbp.tech/login"
              target="_blank"
              rel="noopener noreferrer"
              className="anchor-el"
            >
              E-Commerce Website
            </a>
          </h3>
          <p className="project-description">
            A fully responsive e-commerce website built using React and Node.js.
          </p>
          <p className="project-description">Name:Rahul, Password:rahul@2021</p>

          <div className="project-links">
            <a
              href="https://github.com/PrathibhaGera/Ecommerce_website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="Project 2"
            className="project-image"
          />
          <h3 className="project-title-heading">
            <a href="https://gameapprps.ccbp.tech/" className="anchor-el">
              Rock Paper Scissor Game
            </a>
          </h3>
          <p className="project-description">
            A fun and interactive Rock-Paper-Scissors game built using React.js
            with dynamic UI updates
          </p>
          <div className="project-links">
            <a
              href="https://github.com/PrathibhaGera/RockPaperScissors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
