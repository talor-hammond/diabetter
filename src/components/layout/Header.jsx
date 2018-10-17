import React from 'react';
import { Link } from 'react-router-dom';

// material-ui components:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// const styles = () => ({

// });

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>

        <Typography variant="h6" color="inherit">
          diabetter
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default Header;