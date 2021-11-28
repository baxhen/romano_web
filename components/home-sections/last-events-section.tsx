import { Box, useMediaQuery, useTheme, Typography, Grid } from "@mui/material";
import EventCard, { IEvent } from "../event-card";

import HeaderSpacing from "../header-spacing";
import Hidden from "../hidden";

interface Props {}

const LastEventsSection = (props: Props) => {
  const theme = useTheme();
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));

  const events: IEvent[] = [
    {
      id: 1,
      title: "LOL Arcane Challenge",
      description:
        "Duas irmãs. Duas cidades. Uma descoberta que mudará o mundo para sempre. Nas cidades de Piltover e Zaun, a tensão aumenta à medida que inventores, arruaceiros, políticos e senhores do crime ficam cada vez mais fartos das restrições de uma sociedade devastada.",
      url: "https://s2.glbimg.com/7Mizy704kv29AkwK9zJL2i_VR1c=/2098x0:3322x2160/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/g/s/JBAASNT9qg7XHk3LRMWA/arcane-critica-3.jpg",
    },
    {
      id: 2,
      title: "LOL Arcane Challenge",
      description:
        "Duas irmãs. Duas cidades. Uma descoberta que mudará o mundo para sempre. Nas cidades de Piltover e Zaun, a tensão aumenta à medida que inventores, arruaceiros, políticos e senhores do crime ficam cada vez mais fartos das restrições de uma sociedade devastada.",
      url: "https://s2.glbimg.com/7Mizy704kv29AkwK9zJL2i_VR1c=/2098x0:3322x2160/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/g/s/JBAASNT9qg7XHk3LRMWA/arcane-critica-3.jpg",
    },
    {
      id: 3,
      title: "LOL Arcane Challenge",
      description:
        "Duas irmãs. Duas cidades. Uma descoberta que mudará o mundo para sempre. Nas cidades de Piltover e Zaun, a tensão aumenta à medida que inventores, arruaceiros, políticos e senhores do crime ficam cada vez mais fartos das restrições de uma sociedade devastada.",
      url: "https://s2.glbimg.com/7Mizy704kv29AkwK9zJL2i_VR1c=/2098x0:3322x2160/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/g/s/JBAASNT9qg7XHk3LRMWA/arcane-critica-3.jpg",
    },
  ];
  return (
    <Box height="max-content">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        gap="2rem"
        style={{
          background: theme.palette.primary.main,
          paddingTop: "2rem",
          paddingBottom: "2rem",
          height: "max-content",
        }}
      >
        <Grid item xs={!downSM ? 12 : true}>
          <Typography
            variant="h3"
            color="white"
            textAlign="center"
            sx={{ lineHeight: "0.8" }}
          >
            Últimos Eventos
          </Typography>
        </Grid>
        {events.map((event) => (
          <Grid item key={event.id}>
            <EventCard {...event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LastEventsSection;
