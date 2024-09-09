import Header from "components/Header";

function pageWrapper(WrappedComponent) {
  return (props) => (
    <>
      <Header />
      <WrappedComponent {...props} />
    </>
  );
}

export default pageWrapper;
