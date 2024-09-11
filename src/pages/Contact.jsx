import styled from "styled-components";
import { Link } from "react-router-dom";

import pageWrapper from "HOCs/PageWrapper";
import { MassiveH1, P } from "components/layout";
import { colors, space } from "data/styles";

const CenteredContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactLink = styled(Link)`
  padding: 2rem 0;
  width: 250px;

  background-color: ${colors.highlight1};
  color: ${colors.background};
  text-transform: uppercase;

  &:active {
    filter: brightness(150%);
    transition: 0.4s;
  }
`;

const SmallLinkContainer = styled(P)`
  margin-top: ${space.box};
  color: ${colors.lightText};
`;

const SmallLink = styled(Link)`
  color: ${colors.lightText};
  text-decoration: underline;
`;

const ContactPage = () => {
  return (
    <CenteredContent>
      <MassiveH1>Contact</MassiveH1>
      <ContactLink type="button" to="mailto:sam.bunce@hotmail.com">
        Email
      </ContactLink>
      <SmallLinkContainer>
        <SmallLink to="https://linkedin.com/in/sambunce">LinkedIn</SmallLink>
      </SmallLinkContainer>
    </CenteredContent>
  );
};

export default pageWrapper(ContactPage);
