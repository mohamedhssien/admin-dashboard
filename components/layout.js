import Link from 'next/link'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div>
    <div  >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* not implement */}
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >

           <Link href="/users-page"><Button color="inherit">manage Users</Button></Link>
           <Link href="/posts-page"><Button color="inherit">manage Posts</Button></Link> 
           <Link href="/comments"><Button color="inherit">manage Comments</Button></Link> 
          </Typography>
          {/* <Button color="inherit">Login</Button>  not impement */}
        </Toolbar>
      </AppBar>
      
    </div>
    <div> 
        {props.children}
    </div>
    </div>
  );
}


export default Layout