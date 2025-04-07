import styled from "styled-components";
import { Link } from "react-router-dom";
import { P } from "components/layout";
import { colors, space } from "data/styles";

const FooterContainer = styled.div`
  margin: ${space.page} ${space.page} ${space.box} ${space.page};
`;

const FooterText = styled(P)`
  margin: ${space.tiny} 0;
  color: ${colors.lightText};
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: ${colors.lightText};
  text-decoration: underline;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <FooterLink to="https://github.com/TheBigBadBunce/bunce-site">
          Built from scratch
        </FooterLink>{" "}
        by Sam Bunce ©2025.
      </FooterText>
    </FooterContainer>
  );
};
