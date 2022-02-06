import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function UsersList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="NAME" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="WEBSITE"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                NAME
              </Typography>
              {' COMPANY NAME — catchPhrase'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}