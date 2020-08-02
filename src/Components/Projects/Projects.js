import React from "react";
import styles from "./Projects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { addProject, deleteProject } from "../../redux/projects/action";
import { connect, useDispatch } from "react-redux";
import AddButton from "../AddButton/AddButton";

const Projects = ({ projects }) => {
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(addProject({ projectTitle: "", company: "", description: "" }));
  };

  const handleRemoveClick = index => {
    dispatch(deleteProject(index));
  };

  return (
    <div className={styles.project_item}>
      <h3 className={styles.title}>Projects</h3>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          removeProject={handleRemoveClick}
          index={index}
          company={project.company}
          description={project.description}
          title={project.projectTitle}
        />
      ))}
      <AddButton onClick={handleAddClick} title={"Project"} />
    </div>
  );
};

const mapStateToProps = state => ({
  projects: state.resume.projects
});

export default connect(mapStateToProps)(Projects);
