import React from 'react';
import { ClassNameMap, withStyles } from '@material-ui/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import styles from './styles';
import { MaterialStyle } from '../../utils/types';

interface Props extends MaterialStyle<typeof styles> {
  text: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}

const _NavLink: React.FC<Props> = ({ text, onClick, classes }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        className={classes.root}
        variant="h6"
        component="a"
        onClick={onClick}
      >
        {text}
      </Typography>
    </Box>
  );
};

export const NavLink = withStyles(styles)(_NavLink);
export default withStyles(styles)(_NavLink);
