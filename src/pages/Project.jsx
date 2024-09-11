import { Navigate, useParams } from "react-router-dom";
import SideBySidePage from "components/SideBySidePage";
import pageWrapper from "HOCs/PageWrapper";
import useProject from "hooks/useProject";

const Project = () => {
  const { slug } = useParams();
  const project = useProject(slug);

  if (!project) {
    return <Navigate replace to="/" />;
  }

  return (
    <SideBySidePage title={project.title} image={project.photo}>
      {project.description}
    </SideBySidePage>
  );
};

export default pageWrapper(Project);
