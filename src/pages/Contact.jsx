import pageWrapper from "HOCs/PageWrapper";
import { MassiveH1 } from "components/layout";
import { colors } from "data/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CenteredContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactLink = styled(Link)`
  width: 250px;
  padding: 2rem 0;
  background-color: ${colors.highlight1};
  color: ${colors.background};
  text-decoration: none;
  text-transform: uppercase;

  &:active {
    filter: brightness(150%);
    transition: 0.4s;
  }
`;

const ContactPage = () => {
  return (
    <CenteredContent>
      <MassiveH1>Contact</MassiveH1>
      <ContactLink type="button" to="mailto:sam.bunce@hotmail.com">
        Email
      </ContactLink>
    </CenteredContent>
  );
};

export default pageWrapper(ContactPage);
