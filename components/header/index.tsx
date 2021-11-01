import React from 'react';
import Image from 'next/image';

import MenuIcon from '@mui/icons-material/Menu';

import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HeaderDrawer from './drawer';
import { useRouter } from 'next/router';

interface Props {}

export const Header: React.FC<Props> = () => {
  const history = useRouter();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: '22vh', display: 'flex', justifyContent: 'center' }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 'auto' }}
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ fontSize: '55px' }} />
          </IconButton>
          <HeaderDrawer open={open} onClose={toggleDrawer} />

          <Image
            src="/static/main-logo.png"
            alt="main logo"
            height="60"
            width="120"
            onClick={() => history.push('/')}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
