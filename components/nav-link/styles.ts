import theme from '../../src/theme';

const styles = {
  root: {
    cursor: 'pointer',
    '&:hover, &:focus': {
      color: theme.palette.secondary.light,
    },
  },
};

export default styles;
