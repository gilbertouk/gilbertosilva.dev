import github from './assets/icon-github.svg';
import linkedin from './assets/icon-linkedin.svg';
import ProjectCard from './components/ProjectCard';
import TechList from './components/TechList';
import ContactForm from './components/ContactForm';
import './App.css';
import Footer from './components/Footer';
import fetchAllRepositories from './utils/api';
import { useEffect, useState } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchAllRepositories()
      .then((data) => {
        const repos = data.filter((repo) => repo.topics.length > 0);

        setRepositories(repos);
      })
      .catch((error) => console.log('error'));
  }, []);

  return (
    <>
      <div className="container" id="home">
        <header>
          <div className="header-container">
            <h1 className="title title-hidden">gilbertosilva</h1>
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
              <strong className="about-underline">Gilberto Silva</strong>.
            </h2>
            <p>
              Based in London, UK, I'm a Junior Full-Stack Developer <br />
              focused on the back-end, passionate about building web apps <br />
              that users love.
            </p>
            <p>Eligible to work in the UK, EU and Brazil.</p>
            <div className="about-underline-contact">
              <h3>
                <a href="#contact" target="_self" className="contact-link">
                  Contact me
                </a>
              </h3>
            </div>
          </div>
          <h2 className="techs">Techs</h2>
          <hr className="line" />
          <TechList />
          <hr className="line line-hidden" />
          <div className="projects-header">
            <h2>Projects</h2>
            <p>
              <a href="#contact" target="_self" className="contact-link">
                Contact me
              </a>
            </p>
          </div>
          <div className="projects-cards">
            {repositories.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </main>
      </div>
      <section className="contact-container">
        <div className="contact">
          <div className="contact-description">
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className="form-container" id="contact">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
