import { skills } from "../../data";
import "./skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li className="skills__list-item btn btn--plain">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
