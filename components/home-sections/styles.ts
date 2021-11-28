import theme from "../../src/theme";

const styles = {
  root: {
    width: "75rem",
    height: "30rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
};

export default styles;
