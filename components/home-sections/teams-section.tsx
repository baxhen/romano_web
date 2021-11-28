import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-material-ui-carousel"), {
  ssr: false,
});
import chunk from "lodash/chunk";
import { Box, useMediaQuery, useTheme, Typography, Grid } from "@mui/material";
import { withStyles } from "@material-ui/styles";

import GameCard, { IGame } from "../game-card";
import GameCardGroups from "../game-card-group";
import Hidden from "../hidden";
import styles from "./styles";
import { MaterialStyle } from "../../utils/types";

interface Props extends MaterialStyle<typeof styles> {}

const _TeamsSection = ({ classes }: Props) => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));

  const games: IGame[] = [
    {
      id: 1,
      title: "League of Legends",
      url: "https://s2.glbimg.com/y6nngNdKtYKEZx9QiZIa-bW4cq4=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/E/T/z4H0MFRxKrUlZijtEnAQ/20190522035739-1200-675-league-of-legends.jpg",
    },
    {
      id: 2,
      title: "Dota 2",
      url: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
    },
    {
      id: 3,
      title: "Couter Strike Go",
      url: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/09/Counter-Strike.jpg",
    },
    {
      id: 4,
      title: "League of Legends",
      url: "https://s2.glbimg.com/y6nngNdKtYKEZx9QiZIa-bW4cq4=/0x0:1200x675/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/E/T/z4H0MFRxKrUlZijtEnAQ/20190522035739-1200-675-league-of-legends.jpg",
    },
    {
      id: 5,
      title: "Dota 2",
      url: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
    },
    {
      id: 6,
      title: "Couter Strike Go",
      url: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2017/09/Counter-Strike.jpg",
    },
  ];
  const chunkedGames = chunk(games, 3);

  return (
    <Box height="80vh">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gap="2rem"
        style={{
          background: "white",
          paddingTop: "2rem",
          paddingBottom: "2rem",
          height: "max-content",
        }}
      >
        <Grid item xs={!downSM ? 12 : true}>
          <Typography
            variant="h3"
            color="primary"
            textAlign="center"
            sx={{ lineHeight: "0.8" }}
          >
            Equipes
          </Typography>
        </Grid>

        <Grid item>
          <Carousel
            className={classes.root}
            cycleNavigation
            animation="slide"
            autoPlay
            stopAutoPlayOnHover
            duration={1000}
            interval={7000}
          >
            {(!downSM &&
              chunkedGames.map((chunkedGame, i) => (
                <GameCardGroups games={chunkedGame} key={i} />
              ))) ||
              games.map((game) => <GameCard {...game} key={game.id} />)}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export const TeamsSection = withStyles(styles)(_TeamsSection);
export default withStyles(styles)(_TeamsSection);
