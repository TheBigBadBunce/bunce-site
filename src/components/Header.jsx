import { colors, space } from "data/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBar = styled.header`
  width: 100%;
  min-height: 60px;
  background-color: ${colors.highlight1};
  color: ${colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: ${space.box};
  max-width: calc(100vw - ${space.boxDouble});
`;

const Name = styled.h1`
  font-family: "DM Sans";
  font-size: 40pt;
  margin: 0;
  margin-right: auto;
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: ${space.box};
  font-family: "Nunito Sans";
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderBar>
      <Name>Sam Bunce</Name>
      <NavLink>Projects</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </HeaderBar>
  );
};

export default Header;
