import theme from "../../src/theme";
const styles: any = {
  root: {
    width: "75rem",
    height: "auto",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
};

export default styles;
