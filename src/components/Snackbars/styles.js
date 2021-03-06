import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export const styles = theme => ({
    success: {
      backgroundColor: green[600],
    },
    close: {
        padding: 4,
      },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight:8,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  
