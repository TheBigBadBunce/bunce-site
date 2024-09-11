import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#F5F5F5",
  text: "#000015",
  mid: "#748386",
  highlight1: "#3454D1",
  highlight2: "#FF8C42",
};

export const space = {
  box: "18px",
  mobile: "8px",
  page: "48px",
};

export const mobileMediaQuery = "@media (max-width:768px)";

// Style overrides
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100vh;

    background-color: ${colors.background};
    color: ${colors.text};
  }

  a {
    text-decoration: none;
  }
`;
