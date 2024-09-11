import styled from "styled-components";
import { H1 } from "components/layout";
import { space, mobileMediaQuery } from "data/styles";

const SideBySideContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  & > * {
    width: 50%;
  }

  ${mobileMediaQuery} {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  padding-left: ${space.page};

  ${mobileMediaQuery} {
    padding-left: 0;
    padding-top: ${space.box};
  }
`;

const Image = styled.img`
  width: 100%;
`;

const SideBySidePage = ({ title, children, image }) => {
  return (
    <>
      <SideBySideContainer>
        <div>
          <H1>{title}</H1>
          {children}
        </div>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
      </SideBySideContainer>
    </>
  );
};

export default SideBySidePage;
