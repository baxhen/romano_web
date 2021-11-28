import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export interface IEvent {
  title: string;
  description: string;
  url: string;
  id: number;
}

export default function EventCard({ title, description, url, id }: IEvent) {
  return (
    <Card sx={{ maxWidth: "20rem" }}>
      <CardActionArea onClick={() => console.log("evento de id", id)}>
        <CardMedia component="img" height="300" image={url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
