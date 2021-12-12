import { Box } from "@mui/material";
import React from "react";
import GalleryCard, { IGalleryCard } from "../../components/gallery-card";
import withHeaderBg from "../../hoc/with-header-bg";

interface Props {}

const Gallery: React.FC<Props> = () => {
  const galleryConfig: IGalleryCard[] = [
    {
      id: 1,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
    {
      id: 2,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
    {
      id: 3,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
    {
      id: 4,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
    {
      id: 5,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
    {
      id: 6,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
    {
      id: 7,
      image_url:
        "https://intz.com.br/wp-content/gallery/cblol-2019-1-split/cache/INTZ_19_Photos_LOL_CBLOL_1_Semi-1.jpg-nggid011-ngg0dyn-318x188x100-00f0w010c011r110f110r010t010.jpg",
      description: "CBLOL 2019 -1º SPLIT - SEMI-FINAL",
    },
  ];

  return (
    <Box
      height="auto"
      p="4rem 5rem"
      display="flex"
      gap="1rem"
      flexWrap="wrap"
      justifyContent="center"
    >
      {galleryConfig.map((gallery) => (
        <GalleryCard {...gallery} key={gallery.id} />
      ))}
    </Box>
  );
};

export default withHeaderBg({ title: "Fotos" })(Gallery);
