import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { colors, mobileMediaQuery, space } from "data/styles";

const HeaderBar = styled.header`
  display: flex;
  box-sizing: border-box;

  padding: ${space.box};

  width: 100%;
  max-width: 100vw;
  min-height: 60px;

  background-color: ${colors.highlight1};
  color: ${colors.background};

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  ${mobileMediaQuery} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Name = styled.h1`
  margin: 0;
  margin-right: auto;

  font-family: "DM Sans";
  font-size: 40pt;

  a {
    color: ${colors.background};
  }

  ${mobileMediaQuery} {
    margin-right: 0;
    width: 100%;

    font-size: 30pt;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  padding: ${space.box};

  color: inherit;
  font-family: "Nunito Sans";
  text-decoration: ${({ $currentPage }) =>
    $currentPage ? "underline" : "none"};
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
