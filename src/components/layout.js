import styled from "styled-components";
import { space, mobileMediaQuery } from "data/styles";

export const H1 = styled.h1`
  font-size: 36pt;
  margin: 0 0 ${space.box} 0;

  ${mobileMediaQuery} {
    font-size: 24pt;
  }
`;

export const MassiveH1 = styled.h1`
  font-size: 60pt;
`;

export const P = styled.p``;
