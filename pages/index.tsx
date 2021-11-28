import type { NextPage } from "next";

import {
  Button,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import styles from "../styles/Home.module.css";
import HeaderSpacing from "../components/header-spacing";
import Hidden from "../components/hidden";
import MainSection from "../components/home-sections/main-section";

const Home: NextPage = () => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={styles.container}>
      <MainSection />
    </div>
  );
};

export default Home;
