import uniqid from "uniqid";

import ProjectContainer from "../ProjectContainer/ProjectContainer.jsx";
import { projects } from "../../data";

import "./projects.css";

const Projects = () => {
  if (!projects.length) return null;

  return (
    <section id="projects" className="section projects fade-in">
      <h2 className="section__title">Education Background</h2>

      <ul className="projects__grid">
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
