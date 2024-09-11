import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { colors, mobileMediaQuery, space } from "data/styles";

// TODO better CSS order
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
  max-width: 100vw;
  box-sizing: border-box;

  ${mobileMediaQuery} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Name = styled.h1`
  font-family: "DM Sans";
  font-size: 40pt;
  margin: 0;
  margin-right: auto;

  a {
    color: ${colors.background};
  }

  ${mobileMediaQuery} {
    font-size: 30pt;
    width: 100%;
    text-align: center;
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  text-decoration: ${({ $currentPage }) =>
    $currentPage ? "underline" : "none"};
  padding: ${space.box};
  font-family: "Nunito Sans";
  text-transform: uppercase;

  ${mobileMediaQuery} {
    padding: ${space.mobile};
  }
`;

const links = [
  { path: "/", name: "Projects" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <HeaderBar>
      <Name>
        <Link to={"/"}>Sam Bunce</Link>
      </Name>
      {links.map(({ path, name }) => (
        <NavLink to={path} $currentPage={path === pathname} key={name}>
          {name}
        </NavLink>
      ))}
    </HeaderBar>
  );
};

export default Header;
