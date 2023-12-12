const ProjectCard = ({ project }) => {
  let thumbnail = '';

  if (project.topics.includes('backend')) {
    const random = (Math.random() * 1).toFixed(0);

    if (random === '0') {
      thumbnail = './projects-image/thumbnail-restapi.png';
    } else {
      thumbnail = './projects-image/thumbnail-restapi1.png';
    }
  } else {
    thumbnail = './projects-image/thumbnail-' + project.name + '.jpeg';
  }

  return (
    <div className="cards">
      <div className="cards-image">
        <img
          className="image-project"
          src={thumbnail}
          alt="print screen of project"
        />
        <div className="image-hover">
          <div className="text-hover">
            <h3>
              <a
                href={project.homepage}
                target="_blank"
                className="contact-link"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </h3>

            <h3>
              <a
                href={project.html_url}
                target="_blank"
                className="contact-link"
                rel="noreferrer"
              >
                VIEW CODE
              </a>
            </h3>
          </div>
        </div>
      </div>

      <h4>{project.name}</h4>
      <div className="card-tech">
        <ul>
          {project.topics.map((tech, index) => (
            <li key={index}>
              <h5>{tech}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
