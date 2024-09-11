import styled from "styled-components";
import { P } from "./layout";
import { colors, space } from "data/styles";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  margin: ${space.page} ${space.page} ${space.box} ${space.page};
`;

const FooterText = styled(P)`
  text-align: center;
  margin: ${space.tiny} 0;
  color: ${colors.lightText};
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
        by Sam Bunce ©2024.
      </FooterText>
    </FooterContainer>
  );
};
