import projects from "data/projects";

const useProject = (slug) => {
  return projects.find((project) => project.slug === slug);
};

export default useProject;
