import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, space } from "data/styles";

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${space.box};
`;

export const ProjectWrapperLink = styled(Link)`
  overflow: hidden;
`;

export const ProjectText = styled.div`
  text-align: center;
  z-index: 1;
  padding: ${space.box};
`;
export const ProjectTitle = styled.div`
  font-size: 24pt;
  font-weight: 600;
`;
export const ProjectDescription = styled.div`
  height: 3.7rem;
  overflow-y: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Project = styled.div`
  background-image: url(${({ $photo }) => $photo});
  background-size: cover;
  background-position: center;
  color: ${colors.background};
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.7s;

  &:before {
    content: "";
    background: #000000;
    position: absolute;
    width: 100%;
    height: 100%;
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
