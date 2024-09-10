import pageWrapper from "HOCs/PageWrapper";
import { P } from "components/layout";
import aboutImage from "images/sam_rah_foh_short.jpeg";
import { space } from "data/styles";
import SideBySidePage from "components/SideBySidePage";
import { useParams } from "react-router-dom";
import useProject from "hooks/useProject";

const Project = () => {
  const { slug } = useParams();
  const project = useProject(slug);
  return (
    <SideBySidePage title={project.title} image={project.photo}>
      <P>{project.description}</P>
    </SideBySidePage>
  );
};

export default pageWrapper(Project);
