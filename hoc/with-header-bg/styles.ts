import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: { height: "55vh", position: "relative" },
  title_container: {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    zIndex: 0,
  },
  title: { marginTop: "auto", marginBottom: "7rem" },
}));

export default useStyles;
