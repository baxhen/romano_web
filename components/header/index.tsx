import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import HeaderDrawer from "./drawer";
import Hidden from "../hidden";
import _NavLink from "../nav-link";

interface Props {}

export const Header: React.FC<Props> = () => {
  const history = useRouter();

  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          height: "22vh",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "transparent",
          padding: "0 5rem",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Hidden hidden={!downMD}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: "auto" }}
              onClick={toggleDrawer}
            >
              <MenuIcon sx={{ fontSize: "55px" }} />
            </IconButton>
            <HeaderDrawer open={open} onClose={toggleDrawer} />
          </Hidden>

          <Box sx={{ cursor: "pointer" }}>
            <Image
              src="/static/main-logo.png"
              alt="main logo"
              height="60"
              width="120"
              onClick={() => history.push("/")}
            />
          </Box>

          <Hidden hidden={downMD}>
            <Box width="70%" margin="0 auto 0 auto" display="flex">
              {[
                { text: "Sobre", url: "/about" },
                { text: "Equipes", url: "/teams" },
                {
                  text: "Patrocinadores",
                  url: "/sponsors",
                },
                { text: "Fotos", url: "/gallery" },
              ].map(({ text, url }, i) => (
                <_NavLink
                  key={i}
                  text={text}
                  onClick={() => history.push(url)}
                />
              ))}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
