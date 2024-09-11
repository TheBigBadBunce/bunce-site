import pageWrapper from "HOCs/PageWrapper";
import { H1 } from "components/layout";
import {
  ProjectList,
  ProjectWrapperLink,
  ProjectText,
  ProjectTitle,
  ProjectDescription,
  Project,
} from "./Home.styles";
import projects from "data/projects";

const HomePage = () => {
  return (
    <>
      <H1>Recent Projects</H1>
      <ProjectList>
        {projects.map(({ title, description, photo, slug }) => (
          <ProjectWrapperLink to={`/project/${slug}`} key={title}>
            <Project $photo={photo}>
              <ProjectText>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description}</ProjectDescription>
              </ProjectText>
            </Project>
          </ProjectWrapperLink>
        ))}
      </ProjectList>
    </>
  );
};

export default pageWrapper(HomePage);
