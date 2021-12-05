import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import useStyles from "./styles";
import { IconButton } from "@mui/material";
import theme from "../../src/theme";

export type SocialTypes = {
  linkedin: "linkedin";
  facebook: "facebook";
  instagram: "instagram";
  twitter: "twitter";
};

export interface IStaff {
  id: number;
  name: string;
  email: string;
  position: string;
  image_url: string;
  socials: { type: keyof SocialTypes; url: string }[];
}

const SocialIcons: { [Property in keyof SocialTypes]: React.ReactNode } = {
  linkedin: <LinkedInIcon />,
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  twitter: <TwitterIcon />,
};

const StaffCard: React.FC<IStaff> = ({
  name,
  email,
  position,
  image_url,
  socials,
  id,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia component="img" height="300" image={image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {name}
        </Typography>
        <Typography variant="body2" color="white">
          {position}
        </Typography>
        <div
          style={{
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <Typography variant="body2" color="white">
            {email}
          </Typography>
        </div>
        <Grid container sx={{ ml: "-.7rem" }}>
          {socials.map((s, i) => (
            <Grid item xs>
              <IconButton
                onClick={() => {
                  window.open(s.url, "__blank");
                }}
                className={classes.icon}
              >
                {SocialIcons[s.type]}
              </IconButton>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

StaffCard.defaultProps = {
  image_url: "https://intz.com.br/wp-content/uploads/2021/10/APOLLO_3.png",
  socials: [],
  email: "",
};

export default StaffCard;
