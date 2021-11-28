import Card from "@mui/material/Card";
import { Grid, useTheme } from "@mui/material";
import GameCard, { IGame } from "../game-card";

export interface Props {
  games: IGame[];
}

export default function GameCardGroups({ games }: Props) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "75rem",
        height: "26rem",
        bgcolor: theme.palette.secondary.main,
      }}
    >
      <Grid
        container
        gap="2rem"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        {games.map((game) => (
          <GameCard {...game} key={game.id} />
        ))}
      </Grid>
    </Card>
  );
}
