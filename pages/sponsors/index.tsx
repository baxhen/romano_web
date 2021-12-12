import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import React from "react";
import SponsorCard, { ISponsorCard } from "../../components/sponsor-card";
import withHeaderBg from "../../hoc/with-header-bg";
import theme from "../../src/theme";

interface Props {}

const Sponsors: React.FC<Props> = () => {
  const sponsorConfig: ISponsorCard[] = [
    {
      id: 1,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
    },
    {
      id: 2,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
    },
    {
      id: 3,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
    },
    {
      id: 4,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
    },
    {
      id: 5,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
    },
    {
      id: 6,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
    },
    {
      id: 7,
      website: "https://www.google.com",
      image_url:
        "https://intz.com.br/wp-content/uploads/2020/02/INTZ_Website_Sponsors_LG_Monitores.png",
      description:
        "LG Electronics e a maior companhia de eletroeletrônicos. Faz parte da LG Corporation, e está presente em mais de 150 países.",
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
      {sponsorConfig.map((sponsor) => (
        <SponsorCard {...sponsor} key={sponsor.id} />
      ))}
    </Box>
  );
};

export default withHeaderBg({ title: "Patrocinadores" })(Sponsors);
