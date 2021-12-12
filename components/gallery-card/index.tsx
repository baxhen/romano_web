import Typography from "@mui/material/Typography";
import useStyles from "./styles";

export interface IGalleryCard {
  id: number;
  description: string;
  image_url: string;
}

const GalleryCard: React.FC<IGalleryCard> = ({
  image_url,
  description,
  id,
}) => {
  const { cls_gallery, cls_gallery__img, cls_gallery__description } =
    useStyles();
  return (
    <div
      className={cls_gallery}
      onClick={() => {
        console.log("open album with id:", id);
      }}
    >
      <img className={cls_gallery__img} src={image_url} alt="gallery_image" />
      <Typography className={cls_gallery__description}>
        {description}
      </Typography>
    </div>
  );
};

GalleryCard.defaultProps = {
  image_url: "",
  description: "",
};

export default GalleryCard;
