import Link from 'next/link'
// import { AppBar, Toolbar, Typography,IconButton } from '@material-ui/core';

// const Layout = (props) => ( 

//     <div  style=  { {marginBottom: 20} } >

//         <AppBar position="static">
//         <Toolbar>
//             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" className={classes.title}>
//             News
//             </Typography>
//             <Button color="inherit">Login</Button>
//         </Toolbar>
//         </AppBar>
        
//         {/* <Link href="/comments"><a style=  { {padding: 20} }>manage Comments</a></Link>
//         <Link href="/users-page"><a style=  { {padding: 20} }>manage Users</a></Link>
//         <Link href="/posts-page"><a style=  { {padding: 20} }>manage Posts</a></Link> */}



//         { props.children }

//     </div>
//  );

//  export default Layout


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
    <div  className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>

           <Link href="/comments"><Button color="inherit">manage Comments</Button></Link> 
           <Link href="/users-page"><Button color="inherit">manage Users</Button></Link>
           <Link href="/posts-page"><Button color="inherit">manage Posts</Button></Link> 
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
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