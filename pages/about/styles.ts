import { makeStyles } from "@mui/styles";
import { lighten } from "@mui/system";
import theme from "../../src/theme";

const useStyles = makeStyles(() => ({
  root: { background: "#0b0b11" },
  sections_container: {
    margin: "0 auto",
    padding: "2rem",
    background: "#202028",
    height: "100%",
    width: "97.5vw",
  },
  section_1_container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  section_1_container__paragraph_container: {
    height: "6rem",
    overflow: "auto",
    flex: 1,
    paddingRight: "1rem",
    marginBottom: "1rem",

    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: "6px",
      backgroundColor: lighten("#202028", 0.2),
    },
    "&::-webkit-scrollbar": {
      width: "1px",
      borderRadius: "6px",
      backgroundColor: lighten("#202028", 0.2),
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "6px",
      backgroundColor: lighten("#202028", 0.5),
    },
  },
  section_1_container__statistics_container: {
    flex: 1,
    display: "flex",
    gap: "2rem",
    "& > div:first-child": {
      marginLeft: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      "& > div:first-child": {
        margin: "0",
      },
      justifyContent: "center",
    },
    "& > div": {
      marginTop: "auto",
    },
  },

  section_2_container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "2rem 0",

    "& > div": { display: "flex", flexDirection: "column", gap: "2rem" },
  },
  section_3_container: {},
}));

export default useStyles;
