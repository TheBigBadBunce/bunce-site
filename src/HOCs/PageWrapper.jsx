import Header from "components/Header";
import styled from "styled-components";
import { space } from "data/styles";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Page = styled.div`
  width: 100%;
  padding: ${space.page};
  box-sizing: border-box;
  max-width: 1000px;
  font-family: "Nunito Sans";
`;

function pageWrapper(WrappedComponent) {
  return (props) => (
    <>
      <Header />
      <PageContainer>
        <Page>
          <WrappedComponent {...props} />
        </Page>
      </PageContainer>
    </>
  );
}

export default pageWrapper;
