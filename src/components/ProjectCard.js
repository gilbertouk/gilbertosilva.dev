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
      <img src={thumbnail} alt="print screen of project" />

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
