import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, useTheme } from "@mui/material";

export interface IGame {
  title: string;
  url: string;
  id: number;
}

export default function GameCard({ title, url, id }: IGame) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        width: "100%",
        paddingTop: "2rem",
        paddingBottom: "2rem",
        bgcolor: theme.palette.primary.main,
      }}
    >
      <CardActionArea onClick={() => console.log("evento de id", id)}>
        <CardMedia
          component="img"
          height="300"
          width="300"
          image={url}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
