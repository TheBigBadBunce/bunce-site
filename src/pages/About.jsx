// TODO better import order
import pageWrapper from "HOCs/PageWrapper";
import styled from "styled-components";
import { H1, P } from "components/layout";
import aboutImage from "images/sam_rah_foh_short.jpeg";
import { space } from "data/styles";

const SideBySideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    width: 50%;
  }
`;

const AboutImageContainer = styled.div`
  padding-left: ${space.page};
`;

const AboutImage = styled.img`
  width: 100%;
`;

const AboutPage = () => {
  return (
    <>
      <SideBySideContainer>
        <div>
          <H1>About</H1>
          <P>
            Sam is a Freelance Production Engineer with broad experience across
            almost all areas of live event production. With proven experience in
            Sound, Lights, Video, Stage and Production Management, he comes
            prepared for events of any size and scale, from corporate events, to
            theatrical productions, to live performances in world-class venues.
          </P>
        </div>
        <AboutImageContainer>
          <AboutImage src={aboutImage} />
        </AboutImageContainer>
      </SideBySideContainer>
    </>
  );
};

export default pageWrapper(AboutPage);
