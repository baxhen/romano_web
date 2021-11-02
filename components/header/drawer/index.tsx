import React from 'react';
import { useRouter } from 'next/router';

import InfoIcon from '@mui/icons-material/Info';
import GroupsIcon from '@mui/icons-material/Groups';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CollectionsIcon from '@mui/icons-material/Collections';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const HeaderDrawer: React.FC<Props> = ({ open, onClose }) => {
  const history = useRouter();
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      <List>
        {[
          { text: 'Sobre', url: '/about', Icon: InfoIcon },
          { text: 'Equipes', url: '/teams', Icon: GroupsIcon },
          { text: 'Patrocinadores', url: '/sponsors', Icon: CorporateFareIcon },
          { text: 'Fotos', url: '/gallery', Icon: CollectionsIcon },
        ].map(({ text, url, Icon }) => (
          <ListItem button key={text}>
            <ListItemIcon onClick={() => history.push(url)}>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default HeaderDrawer;
