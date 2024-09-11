import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, space, mobileMediaQuery } from "data/styles";

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space.box};

  ${mobileMediaQuery} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectWrapperLink = styled(Link)`
  overflow: hidden;
`;

export const ProjectText = styled.div`
  z-index: 1;
  padding: ${space.box};
  text-align: center;
`;
export const ProjectTitle = styled.div`
  font-size: 24pt;
  font-weight: 600;
`;
export const ProjectDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  height: 3.7rem;

  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;

  ${mobileMediaQuery} {
    display: none;
  }
`;

export const Project = styled.div`
  display: flex;
  position: relative;

  background-image: url(${({ $photo }) => $photo});
  background-size: cover;
  background-position: center;
  color: ${colors.background};

  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  transition: 0.7s;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    transition: 0.7s;
    opacity: 0.3;
  }

  & > * {
    transition: 0.7s;
  }
  ${ProjectDescription} {
    opacity: 0;
    transition: 0.7s;
  }
  &:hover {
    transform: scale(1.1);

    &:before {
      opacity: 0.6;
    }

    & > * {
      transform: scale(calc(1 / 1.1));
    }

    ${ProjectDescription} {
      opacity: 1;
    }
  }
`;
