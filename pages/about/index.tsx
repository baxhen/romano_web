import { Divider, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import withHeaderBg from "../../hoc/with-header-bg";

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <section>
      <Typography variant="h2">Quem Somos</Typography>
      <Typography variant="body1">História Intrépida</Typography>

      <Divider />

      <section>
        <div>
          <Typography variant="body1">
            Fundado em 2014, o INTZ tornou-se em pouco tempo um dos principais
            clubes do cenário competitivo da América do Sul e tem marcado
            presença constante nas principais decisões de diversas
            modalidades.Seu complexo de treinamento fica localizado em São
            Paulo, montado com toda estrutura de alojamento para atletas de alto
            nível e suporte de psicólogo, nutricionista e fisioterapeuta. Em
            2016, o INTZ tornou-se o único clube a ter vencido no mesmo ano os 2
            splits do Campeonato Brasileiro de League of Legends, além de
            conquistar o tricampeonato da Brasil Mega Arena, o Internacional
            WildCard Qualifier e uma vaga no Mundial.
          </Typography>
        </div>

        <div>
          <div>
            <Typography variant="h3">2014</Typography>
            <Typography variant="h6">Fundado</Typography>
          </div>
          <div>
            <Typography variant="h3">8</Typography>
            <Typography variant="h6">Times</Typography>
          </div>
          <div>
            <Typography variant="h3">45</Typography>
            <Typography variant="h6">Atletas</Typography>
          </div>
        </div>
      </section>

      <section>
        <div>
          <Typography variant="h2">Missão</Typography>
          <Typography variant="body1">
            Proporcionar emoção e excelência profissional por meios de títulos e
            entretenimento
          </Typography>
        </div>
        <div>
          <Typography variant="h2">Visão</Typography>
          <Typography variant="body1">
            Ser o maior clube de esports da América Latina e ter o
            reconhecimento internacional até 2022
          </Typography>
        </div>
        <div>
          <Typography variant="h2">Valores</Typography>
          <Typography variant="body1">
            Reconhecimento: lembrar que os intrépidos são a prioridade do clube.
          </Typography>
          <Typography variant="body1">
            Novos talentos: formar novos atletas e profissionais do mercado para
            compor equipes vencedoras.
          </Typography>
          <Typography variant="body1">
            Espirito campeão: focar no alto desempenho das modalidades
            participantes mantendo o respeito aos adversários.
          </Typography>
          <Typography variant="body1">
            Inovação: trazer soluções criativas e/ou tecnológicas para desafios
            do clube.
          </Typography>
          <Typography variant="body1">
            Responsabilidade financeira: ser um clube sustentável e fomentar o
            crescimento saudável do mercado.
          </Typography>
        </div>
      </section>

      <section>
        <div>
          <Typography variant="h2">CONHEÇA O STAFF</Typography>
        </div>
        <div>Cards</div>
        <div>Cards</div>
        <div>Cards</div>
        <div>Cards</div>
        <div>Cards</div>
        <div>Cards</div>
        <div>Cards</div>
        <div>Cards</div>
      </section>
    </section>
  );
};

export default withHeaderBg({ title: "Sobre" })(About);
