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
        <Box className={classes.root}>
          <Image
            className={classes.image}
            src="/static/header_bg-1.jpg"
            layout="fill"
          />
          <Box className={classes.title_container}>
            <Typography variant="h2" color="white" className={classes.title}>
              {title}
            </Typography>
          </Box>
        </Box>

        <Component {...props} />
      </>
    );
  };

export default withHeaderBg;
