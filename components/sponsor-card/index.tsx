import Typography from "@mui/material/Typography";
import useStyles from "./styles";
import { Button } from "@mui/material";

export interface ISponsorCard {
  id: number;
  description: string;
  website: string;
  image_url: string;
}

const SponsorCard: React.FC<ISponsorCard> = ({
  website,
  image_url,
  description,
  id,
}) => {
  const {
    cls_sponsor,
    cls_sponsor__button,
    cls_sponsor__img,
    cls_sponsor__description,
  } = useStyles();
  return (
    <div className={cls_sponsor}>
      <img className={cls_sponsor__img} src={image_url} alt="sponsor_image" />
      <Typography className={cls_sponsor__description}>
        {description}
      </Typography>
      <Button
        className={cls_sponsor__button}
        onClick={() => window.open(website, "__blank")}
      >
        Website
      </Button>
    </div>
  );
};

SponsorCard.defaultProps = {
  image_url: "",
  description: "",
  website: "",
};

export default SponsorCard;
