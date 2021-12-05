import { Divider, Typography, Box, Grid } from "@mui/material";
import { config } from "process";
import React from "react";
import StatDisplay from "../../components/stats-display";
import StaffCard, { IStaff } from "../../components/staff-card";
import ValuesDisplay from "../../components/values-display";
import withHeaderBg from "../../hoc/with-header-bg";
import theme from "../../src/theme";
import { makeStyles } from "@mui/styles";
import { lighten } from "@mui/system";

const useStyles = makeStyles(() => ({
  root: { background: "#0b0b11" },
  sections_container: {
    margin: "0 auto",
    padding: "2rem",
    background: "#202028",
    height: "100%",
    width: "97.5vw",
  },
  section_1_container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  section_1_container__paragraph_container: {
    height: "6rem",
    overflow: "auto",
    flex: 1,
    paddingRight: "1rem",
    marginBottom: "1rem",

    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
      borderRadius: "6px",
      backgroundColor: lighten("#202028", 0.2),
    },
    "&::-webkit-scrollbar": {
      width: "1px",
      borderRadius: "6px",
      backgroundColor: lighten("#202028", 0.2),
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "6px",
      backgroundColor: lighten("#202028", 0.5),
    },
  },
  section_1_container__statistics_container: {
    flex: 1,
    display: "flex",
    gap: "2rem",
    "& > div:first-child": {
      marginLeft: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      "& > div:first-child": {
        margin: "0",
      },
      justifyContent: "center",
    },
    "& > div": {
      marginTop: "auto",
    },
  },

  section_2_container: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "2rem 0",

    "& > div": { display: "flex", flexDirection: "column", gap: "2rem" },
  },
  section_3_container: {},
}));

interface Props {}

const About: React.FC<Props> = () => {
  const classes = useStyles();

  const statConfig = [
    { stat: "2014", statName: "Fundado" },
    { stat: "8", statName: "Times" },
    { stat: "45", statName: "Atletas" },
  ];

  const valuesConfig = [
    {
      title: "Missão",
      values: [
        "Proporcionar emoção e excelência profissional por meios de títulos e entretenimento.",
      ],
    },
    {
      title: "Visão",
      values: [
        "Ser o maior clube de esports da América Latina e ter o reconhecimento internacional até 2022",
      ],
    },
    {
      title: "Valores",
      values: [
        "Reconhecimento: lembrar que os intrépidos são a prioridade do clube.",
        "Novos talentos: formar novos atletas e profissionais do mercado para compor equipes vencedoras.",
        "Espirito campeão: focar no alto desempenho das modalidades participantes mantendo o respeito aos adversários.",
        "Inovação: trazer soluções criativas e/ou tecnológicas para desafios do clube.",
        "Responsabilidade financeira: ser um clube sustentável e fomentar o crescimento saudável do mercado.",
      ],
    },
  ];

  const staffConfig: any[] = [
    {
      id: 0,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 1,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 2,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 3,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 4,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 5,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      // image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 6,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      // image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
    {
      id: 7,
      name: "Lucas Almeida",
      position: "CEO",
      email: "lucas@intz.com.br",
      // image_url: "https://intz.com.br/wp-content/uploads/2021/10/LUCAS_8.png",
      socials: [
        { type: "linkedin", url: "https://www.linkedin.com/in/intzsimon/" },
        { type: "instagram", url: "https://www.instagram.com/intzsimon/" },
        { type: "twitter", url: "https://twitter.com/INTZsimon" },
        { type: "facebook", url: "https://www.facebook.com/lucassalmeida01" },
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.sections_container}>
        <Typography variant="h3" color="white" style={{ marginBottom: "1rem" }}>
          Quem Somos
        </Typography>
        <Typography variant="body1" color="white">
          História Intrépida
        </Typography>

        <Divider
          style={{ width: "100%", backgroundColor: "white", margin: "2rem 0" }}
        />

        <section className={classes.section_1_container}>
          <div className={classes.section_1_container__paragraph_container}>
            <Typography variant="body1" color="white">
              Fundado em 2014, o INTZ tornou-se em pouco tempo um dos principais
              clubes do cenário competitivo da América do Sul e tem marcado
              presença constante nas principais decisões de diversas
              modalidades.Seu complexo de treinamento fica localizado em São
              Paulo, montado com toda estrutura de alojamento para atletas de
              alto nível e suporte de psicólogo, nutricionista e fisioterapeuta.
              Em 2016, o INTZ tornou-se o único clube a ter vencido no mesmo ano
              os 2 splits do Campeonato Brasileiro de League of Legends, além de
              conquistar o tricampeonato da Brasil Mega Arena, o Internacional
              WildCard Qualifier e uma vaga no Mundial.
            </Typography>
          </div>

          <div className={classes.section_1_container__statistics_container}>
            {statConfig.map((config, i) => (
              <StatDisplay {...config} key={config.statName + i} />
            ))}
          </div>
        </section>

        <section className={classes.section_2_container}>
          {valuesConfig.map((config, i) => (
            <ValuesDisplay {...config} key={config.title + i} />
          ))}
        </section>

        <section>
          <div style={{ marginBottom: "2rem" }}>
            <Typography variant="h3" color="white" textAlign="center">
              CONHEÇA O STAFF
            </Typography>
          </div>
          <Grid
            container
            spacing={5}
            sx={{ ml: `-${theme.spacing(5)}` }}
            justifyContent="center"
          >
            {staffConfig.map((config, i) => (
              <Grid item key={config.id + i}>
                <StaffCard {...config} />
              </Grid>
            ))}
          </Grid>
        </section>
      </div>
    </div>
  );
};

export default withHeaderBg({ title: "Sobre" })(About);
