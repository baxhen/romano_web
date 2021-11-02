import React from 'react';
import Image from 'next/image';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import MicIcon from '@mui/icons-material/Mic';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import { BsDiscord } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <Box
      width="100%"
      height="max-content"
      display="flex"
      flexDirection="column"
      bgcolor={theme.palette.primary.main}
      padding="2rem 2rem"
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12}>
          <Image
            src="/static/main-logo.png"
            alt="footer logo"
            height="180"
            width="360"
          />
        </Grid>
        <Grid item xs>
          <Divider
            sx={{ width: '100%', bgcolor: theme.palette.secondary.light }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            Entre em Contato
          </Typography>
        </Grid>
        <Grid container item xs={12} direction="column" alignItems="center">
          <Grid item>
            <ContactMailIcon color="secondary" />
          </Grid>
          <Grid item sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="div" color="white">
              Contato
            </Typography>
            <Typography variant="body2" color="secondary">
              contato@apollo.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} direction="column" alignItems="center">
          <Grid item>
            <MicIcon color="secondary" />
          </Grid>
          <Grid item sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="div" color="white">
              Imprensa
            </Typography>
            <Typography variant="body2" color="secondary">
              imprensa@apollo.com
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12} direction="column" alignItems="center">
          <Grid item>
            <CorporateFareIcon color="secondary" />
          </Grid>
          <Grid item sx={{ textAlign: 'center' }}>
            <Typography variant="h6" component="div" color="white">
              Patrocinadores
            </Typography>
            <Typography variant="body2" color="secondary">
              romano@apollo.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Divider
            sx={{ width: '100%', bgcolor: theme.palette.secondary.light }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="white"
            sx={{ textAlign: 'center' }}
          >
            Social
          </Typography>
        </Grid>
        <Grid container item xs={12} direction="column" alignItems="center">
          <Grid item>
            <IconButton href="https://www.linkedin.com/" target="__blank">
              <LinkedInIcon sx={{ color: 'white' }} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://twitter.com/" target="__blank">
              <TwitterIcon sx={{ color: 'white' }} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://facebook.com/" target="__blank">
              <FacebookIcon sx={{ color: 'white' }} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://youtube.com/" target="__blank">
              <YouTubeIcon sx={{ color: 'white' }} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://instagram.com/" target="__blank">
              <InstagramIcon sx={{ color: 'white' }} fontSize="large" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://discord.com/" target="__blank">
              <BsDiscord color="white" size={32} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://store.steampowered.com/" target="__blank">
              <FaSteam color="white" size={32} />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item xs>
          <Divider
            sx={{ width: '100%', bgcolor: theme.palette.secondary.light }}
          />
        </Grid>

        <Grid container item xs={12} direction="column" alignItems="center">
          <Grid item>
            <RoomIcon sx={{ color: 'white' }} fontSize="large" />
          </Grid>
          <Typography variant="h4" color="white">
            Osasco, BR
          </Typography>
        </Grid>

        <Grid item xs>
          <Divider
            sx={{ width: '100%', bgcolor: theme.palette.secondary.light }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" color="white">
            <span style={{ fontSize: '1.5rem' }}>Apollo Games</span> 2021-2022
            Todos os Direitos Reservados
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
