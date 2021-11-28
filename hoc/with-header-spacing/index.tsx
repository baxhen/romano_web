import HeaderSpacing from "../../components/header-spacing";

const withHeaderSpacing = (Component: React.FC) => (props: any) => {
  return (
    <>
      <HeaderSpacing />
      <Component {...props} />
    </>
  );
};

export default withHeaderSpacing;
