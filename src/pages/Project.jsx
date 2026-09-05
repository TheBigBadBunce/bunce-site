import { Navigate, useParams } from "react-router-dom";
import SideBySidePage from "@/components/SideBySidePage";
import pageWrapper from "@/HOCs/PageWrapper";
import useProject from "@/hooks/useProject";
import Markdown from "react-markdown";

const Project = () => {
  const { slug } = useParams();
  const project = useProject(slug);

  if (!project) {
    return <Navigate replace to="/" />;
  }

  return (
    <SideBySidePage
      title={project.title}
      images={project.photos}
      imageCredit={project.photoCredit}
    >
      {Array.isArray(project.description)
        ? project.description.map((block) => <Markdown>{block}</Markdown>)
        : project.description}
    </SideBySidePage>
  );
};

export default pageWrapper(Project);
