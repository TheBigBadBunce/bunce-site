import pageWrapper from "HOCs/PageWrapper";
import { P } from "components/layout";
import aboutImage from "images/sam_rah_foh_short.jpeg";
import { space } from "data/styles";
import SideBySidePage from "components/SideBySidePage";

const AboutPage = () => {
  return (
    <SideBySidePage title="About" image={aboutImage}>
      <P>
        Sam is a Freelance Production Engineer with broad experience across
        almost all areas of live event production. With proven experience in
        Sound, Lights, Video, Stage and Production Management, he comes prepared
        for events of any size and scale, from corporate events, to theatrical
        productions, to live performances in world-class venues.
      </P>
    </SideBySidePage>
  );
};

export default pageWrapper(AboutPage);
