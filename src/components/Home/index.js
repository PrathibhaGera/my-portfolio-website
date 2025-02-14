import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../Header";

import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero-section">
        <div>
          <h1 className="hero-heading">
            Hi, <span className="name">I'm Prathibha</span>, a
            <span className="role"> Front-End Developer</span> passionate about
            creating responsive, user-friendly, and interactive web experiences!
          </h1>
          <Link to="/projects">
            <button className="see-more-btn">See more </button>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/drdkzqqhn/image/upload/v1739426798/7b0551406cd7936252123558aacc9191_djnlu8.jpg"
          alt="profile"
          className="profile"
        />
      </div>
      <div className="about-me-section">
        <h1 className="about-me-heading">About Me </h1>
        <p className="about-me-description">
          Hi, I'm Prathibha, a passionate Front-End Developer with expertise in
          HTML, CSS, JavaScript, React.js, Node.js, Bootstrap, and SQL. I love
          creating responsive, user-friendly web applications that enhance user
          experiences.
        </p>
        <p className="about-me-description">
          With a strong foundation in web development and hands-on experience in
          building modern, scalable web solutions, I am always eager to learn
          new technologies and improve my skills.
        </p>
        <p className="about-me-description">
          I am actively looking for opportunities where I can contribute my
          knowledge while growing as a developer. Let’s build something amazing
          together!
        </p>
      </div>

      <div className="my-skills-section">
        <h1 className="my-skills-heading">My Skills</h1>
        <ul className="ul-items">
          <li className="skill-item">
            <i className="fab fa-html5 skill-icon"></i>
            <span className="skill-name">HTML</span>
          </li>
          <li className="skill-item">
            <i className="fab fa-css3-alt skill-icon"></i>
            <span className="skill-name">CSS</span>
          </li>
          <li className="skill-item">
            <i className="fab fa-js skill-icon"></i>
            <span className="skill-name">JavaScript</span>
          </li>
          <li className="skill-item">
            <i className="fab fa-react skill-icon"></i>
            <span className="skill-name">React.js</span>
          </li>
          <li className="skill-item">
            <i className="fab fa-node skill-icon"></i>
            <span className="skill-name">Node.js</span>
          </li>
          <li className="skill-item">
            <i className="fab fa-bootstrap skill-icon"></i>
            <span className="skill-name">Bootstrap</span>
          </li>
          <li className="skill-item">
            <i className="fas fa-database skill-icon"></i>
            <span className="skill-name">SQL</span>
          </li>
        </ul>
      </div>

      <div className="projects-section">
        <h1 className="section-heading">Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="Project 1"
              className="project-image"
            />
            <h3 className="project-title">Rock Paper Scissor Game</h3>
            <p className="project-description">
              A fun and interactive Rock-Paper-Scissors game built using
              React.js with dynamic UI updates
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
          <div className="project-card">
            <img
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png"
              alt="Project 2"
              className="project-image"
            />
            <h3 className="project-title">Food Munch </h3>
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
            <h3 className="project-title">IPL Dashboard</h3>
            <p className="project-description">
              A dynamic IPL Dashboard built using React.js and Node.js,
              providing real-time team insights and match details.
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
        </div>

        <Link to="/projects">
          <button className="custom-button">View More </button>
        </Link>
      </div>

      <div class="contact-section-alt">
        <h2 class="contact-title-alt">Contact Me</h2>
        <div class="contact-container-alt">
          <div class="contact-info-alt">
            <i class="fas fa-envelope"></i>
            <span>geraprathibha@gmail.com</span>
          </div>
          <div class="contact-info-alt">
            <i class="fas fa-phone"></i>
            <span>+91 1234567890</span>
          </div>
          <div class="contact-info-alt">
            <i class="fab fa-linkedin"></i>
            <a
              href="https://linkedin.com/in/g-prathibha"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div class="contact-info-alt">
            <i class="fab fa-github"></i>
            <a
              href="https://github.com/PrathibhaGera"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
