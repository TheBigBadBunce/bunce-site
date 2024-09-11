import Header from "components/Header";
import styled from "styled-components";
import { space } from "data/styles";
import { Footer } from "components/Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Nunito Sans";
`;

const Page = styled.div`
  width: 100%;
  padding: ${space.box} ${space.page};
  box-sizing: border-box;
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
