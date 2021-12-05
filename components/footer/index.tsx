import React from "react";
import Image from "next/image";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import MicIcon from "@mui/icons-material/Mic";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import { BsDiscord } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import Hidden from "../hidden";

interface Props {}

export const Footer: React.FC<Props> = () => {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down("md"));

  //*** Config Objects */

  const infoConfig = [
    {
      Icon: <ContactMailIcon color="secondary" />,
      Content: (
        <>
          <Typography variant="h6" component="div" color="white">
            Contato
          </Typography>
          <Typography variant="body2" color="secondary">
            contato@apollo.com
          </Typography>
        </>
      ),
    },
    {
      Icon: <MicIcon color="secondary" />,
      Content: (
        <>
          <Typography variant="h6" component="div" color="white">
            Imprensa
          </Typography>
          <Typography variant="body2" color="secondary">
            imprensa@apollo.com
          </Typography>
        </>
      ),
    },
    {
      Icon: <CorporateFareIcon color="secondary" />,
      Content: (
        <>
          <Typography variant="h6" component="div" color="white">
            Patrocinadores
          </Typography>
          <Typography variant="body2" color="secondary">
            romano@apollo.com
          </Typography>
        </>
      ),
    },
  ];

  const socialConfig = [
    {
      Icon: (
        <IconButton href="https://www.linkedin.com/" target="__blank">
          <LinkedInIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      ),
    },
    {
      Icon: (
        <IconButton href="https://twitter.com/" target="__blank">
          <TwitterIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      ),
    },
    {
      Icon: (
        <IconButton href="https://facebook.com/" target="__blank">
          <FacebookIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      ),
    },
    {
      Icon: (
        <IconButton href="https://youtube.com/" target="__blank">
          <YouTubeIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      ),
    },
    {
      Icon: (
        <IconButton href="https://instagram.com/" target="__blank">
          <InstagramIcon sx={{ color: "white" }} fontSize="large" />
        </IconButton>
      ),
    },
    {
      Icon: (
        <IconButton href="https://discord.com/" target="__blank">
          <BsDiscord color="white" size={32} />
        </IconButton>
      ),
    },
    {
      Icon: (
        <IconButton href="https://store.steampowered.com/" target="__blank">
          <FaSteam color="white" size={32} />
        </IconButton>
      ),
    },
  ];

  /** */

  return (
    <Box
      width="100%"
      height="max-content"
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.primary.main}
      padding="2rem 2rem"
    >
      <Grid container spacing={4} alignItems="center" direction="column">
        <Grid item container spacing={4} direction={downMD ? "column" : "row"}>
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Image
              src="/static/main-logo.png"
              alt="footer logo"
              height="180"
              width="360"
            />
          </Grid>
          <Hidden hidden={!downMD}>
            <Grid item container xs={12}>
              <Divider
                sx={{ width: "100%", bgcolor: theme.palette.secondary.light }}
              />
            </Grid>
          </Hidden>

          <Grid
            item
            container
            xs={12}
            md={4}
            direction={downMD ? "row" : "column"}
          >
            <Grid item xs={12} md={3}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                sx={{ textAlign: "center" }}
              >
                Entre em Contato
              </Typography>
            </Grid>

            {infoConfig.map(({ Icon, Content }, i) => (
              <Grid
                container
                item
                xs={12}
                md={3}
                direction="column"
                alignItems="center"
                key={i}
              >
                <Grid item>{Icon}</Grid>
                <Grid item sx={{ textAlign: "center" }}>
                  {Content}
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Hidden hidden={!downMD}>
            <Grid item container xs={12}>
              <Divider
                sx={{ width: "100%", bgcolor: theme.palette.secondary.light }}
              />
            </Grid>
          </Hidden>

          <Grid
            item
            container
            xs={12}
            md={4}
            direction={downMD ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="white"
                sx={{ textAlign: "center" }}
              >
                Social
              </Typography>
            </Grid>

            {socialConfig.map(({ Icon }, i) => (
              <Grid item key={i}>
                {Icon}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item container xs={12}>
          <Divider
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: theme.palette.secondary.light,
            }}
          />
        </Grid>

        <Grid container item xs={12} direction="column" alignItems="center">
          <Grid item>
            <RoomIcon sx={{ color: "white" }} fontSize="large" />
          </Grid>
          <Typography variant="h4" color="white">
            Osasco, BR
          </Typography>
        </Grid>

        <Grid item container xs>
          <Divider
            sx={{ width: "100%", bgcolor: theme.palette.secondary.light }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color="white">
            <span style={{ fontSize: "1.5rem" }}>Apollo Games</span> 2021-2022
            Todos os Direitos Reservados
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
