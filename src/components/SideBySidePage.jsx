import styled from "styled-components";
import { Link } from "react-router-dom";

import { H1 } from "components/layout";
import { space, mobileMediaQuery, colors } from "data/styles";

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

const ImageCredit = styled.div`
  width: 100%;
  text-align: right;
  color: ${colors.text};

  a {
    color: ${colors.text};
    text-decoration: underline;
  }
`;

const SideBySidePage = ({ title, children, image, photoCredit }) => {
  console.log(photoCredit);
  return (
    <>
      <SideBySideContainer>
        <div>
          <H1>{title}</H1>
          {children}
        </div>
        <ImageContainer>
          <Image src={image} />
          {photoCredit && (
            <ImageCredit>
              Image courtesy of{" "}
              {photoCredit.url ? (
                <Link to={photoCredit.url}>{photoCredit.source}</Link>
              ) : (
                photoCredit.source
              )}
            </ImageCredit>
          )}
        </ImageContainer>
      </SideBySideContainer>
    </>
  );
};

export default SideBySidePage;
