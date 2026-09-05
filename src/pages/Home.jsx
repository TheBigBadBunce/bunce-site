import projects from "@/data/projects";
import pageWrapper from "@/HOCs/PageWrapper";
import {
  ProjectList,
  ProjectWrapperLink,
  ProjectText,
  ProjectTitle,
  ProjectDescription,
  Project,
} from "@/pages/Home.styles";
import { H1 } from "@/components/layout";

const HomePage = () => {
  return (
    <>
      <H1>Recent Projects</H1>
      <ProjectList>
        {projects.map(({ title, description, photos, slug }) => (
          <ProjectWrapperLink to={`/project/${slug}`} key={title}>
            <Project $photo={photos[0]}>
              <ProjectText>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>
                  {description.map((line) => (
                    <>
                      {line}
                      <br />
                    </>
                  ))}
                </ProjectDescription>
              </ProjectText>
            </Project>
          </ProjectWrapperLink>
        ))}
      </ProjectList>
    </>
  );
};

export default pageWrapper(HomePage);
