import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import {withStyles} from '@material-ui/core';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  root: {
    width: 250,
  },
};

class SideBar extends Component {
  render() {
    const { isOpen, closeSidebar} = this.props
    return (
      <div>
        <Drawer
          anchor='left'
          open={isOpen}
          onClose={closeSidebar}
        >
          <div className='drawer-navigation'>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Monuments' />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Create Monument' />
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(SideBar);
