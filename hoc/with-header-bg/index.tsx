import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

interface WithHeaderBgProps {
  title: string;
}

const withHeaderBg =
  ({ title }: WithHeaderBgProps) =>
  (Component: React.FC) =>
  (props: any) => {
    const classes = useStyles();
    return (
      <>
        <Box height="55vh" position="relative">
          <Image
            className={classes.root}
            src="/static/header_bg-1.jpg"
            layout="fill"
          />
          <Box
            zIndex={1}
            position="absolute"
            height="100%"
            width="100%"
            justifyContent="center"
            display="flex"
          >
            <Typography
              variant="h2"
              color="white"
              style={{ marginTop: "auto", marginBottom: "7rem" }}
            >
              {title}
            </Typography>
          </Box>
        </Box>

        <Component {...props} />
      </>
    );
  };

export default withHeaderBg;
