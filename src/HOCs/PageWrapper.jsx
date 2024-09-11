import styled from "styled-components";
import Header from "components/Header";
import { Footer } from "components/Footer";
import { space } from "data/styles";

const PageContainer = styled.div`
  min-height: 100vh;
  font-family: "Nunito Sans";

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Page = styled.div`
  padding: ${space.box} ${space.page};
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
`;

function pageWrapper(WrappedComponent) {
  return (props) => (
    <>
      <PageContainer>
        <Header />
        <Page>
          <WrappedComponent {...props} />
        </Page>
        <Footer />
      </PageContainer>
    </>
  );
}

export default pageWrapper;
