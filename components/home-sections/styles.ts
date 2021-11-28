import theme from "../../src/theme";
const styles: any = {
  root: {
    width: "90vw",
    // height: "70vh",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      height: "70vh",
    },
  },
};

export default styles;
