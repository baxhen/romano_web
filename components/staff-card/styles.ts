import { makeStyles } from "@mui/styles";
import { darken } from "@mui/system";
import theme from "../../src/theme";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "black",
    borderRadius: "0",
    transition: "150ms ease-in-out",
    "&:hover": { transform: "scale(1.03)" },
  },
  icon: {
    color: "white",
    "&:hover": { color: darken("#FFF", 0.3) },
    transition: "150ms ease-in-out",
  },
}));

export default useStyles;
