import React, { Component } from 'react';

import {
    Drawer,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Hidden,
    Divider
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import styles from './AppDrawerStyles';

class AppDrawer extends Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes } = this.props;
        const { mobileOpen } = this.state;

        const drawer = (
          <div>
            <div className={classes.toolbar} />
            hello
            <Divider />
          </div>
        );    

        return (
          <div className={classes.root}>
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <Menu />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  Responsive drawer
                </Typography>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              Hello
            </main>
          </div>
        );
    };
};

export default withStyles(styles)(AppDrawer);