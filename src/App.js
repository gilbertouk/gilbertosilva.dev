import './App.css';
import github from './assets/icon-github.svg';
import linkedin from './assets/icon-linkedin.svg';
import { IoLogoJavascript } from 'react-icons/io';
import { FaNode, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiJest, SiPrisma, SiMongodb } from 'react-icons/si';
import { PiFileSql } from 'react-icons/pi';

function App() {
  return (
    <>
      <header>
        <div className="header-container">
          <h1 className="title">gilbertosilva</h1>
          <div className="icons">
            <a
              href="http://github.com/gilbertouk"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/gilbertoantonio/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn icon" />
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="about">
          <h2>
            Nice to meet you! <br /> I'm{' '}
            <span className="about-underline">Gilberto Silva</span>.
          </h2>
          <p>
            Based in London, UK, I'm a Junior Full-Stack Developer <br />
            focused on the back-end, passionate about building web apps <br />
            that users love.
          </p>
          <br />
          <p>Eligible to work in the UK, EU and Brazil.</p>
          <div className="about-underline-contact">
            <h3>Contact me</h3>
          </div>
        </div>
        <div>
          <hr />
          <div className="icons-container">
            <IoLogoJavascript size={120} className="icons-container-item" />
            <FaNode size={120} className="icons-container-item" />
            <SiJest size={120} className="icons-container-item" />
            <FaReact size={120} className="icons-container-item" />
            <FaHtml5 size={120} className="icons-container-item" />
            <FaCss3Alt size={120} className="icons-container-item" />
            <PiFileSql size={120} className="icons-container-item" />
            <SiPrisma size={120} className="icons-container-item" />
            <SiMongodb size={120} className="icons-container-item" />
          </div>
          Projects Contact me Design portfolio HTML CSS View project View code
          E-learning landing page HTML CSS View project View code Todo web app
          HTML CSS JavaScript View project View code Entertainment web app HTML
          CSS JavaScript View project View code Memory Game HTML CSS JavaScript
          View project View code Art gallery showcase HTML CSS JavaScript View
          project View code Contact I would love to hear about your project and
          how I could help. Please fill in the form, and I'll get back to you as
          soon as possible. Name Email Message Send message gilbertosilva
        </div>
      </main>
    </>
  );
}

export default App;
