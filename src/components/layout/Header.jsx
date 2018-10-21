import React from 'react';
// import { Link } from 'react-router-dom';

// material-ui components:
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  logo: {
    color: 'white'
  }
};

const Header = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>

        <Typography variant="h6" color="inherit">
          diabetter
        </Typography>

      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header); // withStyles HOC feeds our styles obj into props as 'classes'