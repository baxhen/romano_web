import {
  Box,
  useMediaQuery,
  useTheme,
  Typography,
  Button,
} from "@mui/material";

import HeaderSpacing from "../header-spacing";
import Hidden from "../hidden";

interface Props {}

const MainSection = (props: Props) => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Hidden hidden={downSM}>
        <HeaderSpacing />
        <Box height="100vh" width="100vw" display="flex" pl="4.5rem" pt="20vh">
          <Box
            sx={{
              height: "min-content",
              display: "flex",
              gap: "3rem",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h1"
              color="white"
              sx={{ maxWidth: "6ch", lineHeight: "0.8" }}
            >
              Sócio Torcedor
            </Typography>

            <Button
              variant="contained"
              sx={{
                height: "4rem",
                width: "12rem",
                borderRadius: 0,
                fontSize: "1.2rem",
                backgroundColor: "orangered",
              }}
            >
              ASSOCIE-SE
            </Button>
          </Box>
        </Box>
      </Hidden>

      <Hidden hidden={!downSM}>
        <Box
          height="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          paddingBottom="10vh"
        >
          <Box
            sx={{
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" color="white" textAlign="center">
              Sócio Torcedor
            </Typography>

            <Button
              variant="contained"
              sx={{
                height: "4rem",
                width: "12rem",
                borderRadius: 0,
                fontSize: "1.2rem",
                backgroundColor: "orangered",
              }}
            >
              ASSOCIE-SE
            </Button>
          </Box>
        </Box>
      </Hidden>
    </div>
  );
};

export default MainSection;
