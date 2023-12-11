import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <hr className="line" />
        <div className="header-container">
          <h4 className="title">
            <a href="#home" target="_self" className="contact-link">
              gilbertosilva
            </a>
          </h4>
          <div className="icons">
            <a
              href="http://github.com/gilbertouk"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub size={24} className="contact-link link-hover" />
            </a>
            <a
              href="https://www.linkedin.com/in/gilbertoantonio/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin size={24} className="contact-link link-hover" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
