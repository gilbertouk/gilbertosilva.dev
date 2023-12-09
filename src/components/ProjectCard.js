const ProjectCard = ({ project }) => {
  return (
    <div className="cards">
      <img src={project.image} alt="print screen of project" />
      <h4>{project.name}</h4>
      <div className="card-tech">
        <h5>{project.techs}</h5>
      </div>
    </div>
  );
};

export default ProjectCard;
