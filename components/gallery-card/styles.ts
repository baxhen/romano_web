import { makeStyles } from "@mui/styles";
import { lighten } from "@mui/system";
import theme from "../../src/theme";

const useStyles = makeStyles(() => ({
  cls_gallery: {
    height: "15rem",
    width: "20rem",
    background: "transparent",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    textAlign: "center",
    cursor: "pointer",
    transition: "150ms ease-in-out",
    "&:hover": { transform: "scale(1.03)" },
  },
  cls_gallery__button: {
    background: theme.palette.secondary.main,
    borderRadius: "0",
    width: "100%",
    color: "white",
    fontSize: "1.2rem",
    letterSpacing: "3px",
    "&:hover": { background: lighten(theme.palette.secondary.main, 0.1) },
  },
  cls_gallery__img: { objectFit: "contain" },
  cls_gallery__description: {},
}));

export default useStyles;
