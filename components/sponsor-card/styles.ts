import { makeStyles } from "@mui/styles";
import { lighten } from "@mui/system";
import theme from "../../src/theme";

const useStyles = makeStyles(() => ({
  cls_sponsor: {
    height: "18rem",
    width: "18rem",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    gap: "1rem",
    alignItems: "center",
    textAlign: "center",
  },
  cls_sponsor__button: {
    background: theme.palette.secondary.main,
    borderRadius: "0",
    width: "100%",
    color: "white",
    fontSize: "1.2rem",
    letterSpacing: "3px",
    "&:hover": { background: lighten(theme.palette.secondary.main, 0.1) },
  },
  cls_sponsor__img: { filter: "invert(100%)", objectFit: "contain" },
  cls_sponsor__description: {},
}));

export default useStyles;
