import Header from "../Header";
import "./index.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-me-container">
        <h1 className="aboutme-heading">About Me </h1>
        <img
          src="https://res.cloudinary.com/drdkzqqhn/image/upload/v1739616173/WhatsApp_Image_2025-02-15_at_16.12.23_y1uujb.jpg"
          alt="profile"
          className="profile"
        />
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
        <h1 className="qualification-title">Educational Qualificaions</h1>
        <h5>Master of Computer Applications</h5>
        <h5>Malineni Lakshmaih MBA College - JNTUK </h5>
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

export default About;
