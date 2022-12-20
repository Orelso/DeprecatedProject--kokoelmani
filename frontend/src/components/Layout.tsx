import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import SavingsIcon from "@mui/icons-material/Savings";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FormatListNumberedRtlOutlinedIcon from "@mui/icons-material/FormatListNumberedRtlOutlined";
import SearchBar from "./SearchBar";
import MenuIcon from '@mui/icons-material/Menu';
import StorageIcon from '@mui/icons-material/Storage';
import { green, red } from '@mui/material/colors';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {useNavigate} from "react-router-dom";
import { makeStyles } from "@mui/styles";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';


// const useStyles = makeStyles((theme) => {
//   return{
//   button: {
//       // backgroundColor: 'green',
//       // width: '10px',
//       //  padding: theme.spacing(1) 
//   },
//   featured: {
//     /* padding: theme.spacing(8) */
//   },
//   tablerow: {
//     /* padding: theme.spacing(2) */

//   }
// }})



const menuItems = [
    {
      text: "Home",
      icon: <HomeIcon color='secondary' />,
      path: "/",
    },
    {
      text: "CreateCollection",
      icon: <AddIcon color='secondary' />,
      path: "/Createcollection",
    },
    {
      text: "Collection",
      icon: <ShoppingBagOutlinedIcon color='secondary' />,
      path: "/Collections",
    },
    {
      text: "Wallet",
      icon: <SavingsIcon color='secondary' />,
      path: "/Wallet",
    },
    {
      text: "Lists",
      icon: <FormatListNumberedRtlOutlinedIcon color='secondary' />,
      path: "/Lists",
    },
    {
      text: "Other",
      icon: <MoreHorizOutlinedIcon color='secondary' />,
      path: "/Other",
    }
  ];

  // const logSign = [
  //   {
  //     text: "Log In",
  //     icon: <LoginIcon color='secondary' />,
  //     // path: "/",
  //   },
  //   {
  //     text: "Sign Up",
  //     icon: <AssignmentIndIcon color='secondary' />,
  //     // path: "/Createcollection",
  //   },

  // ]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  // const classes = useStyles()



  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
 

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <StorageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              textAlign: 'justify',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kokoelmani
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
          ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Kokoelmani
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => navigate(item.path)}
                sx={{ display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',}}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
          ))}
          </Box>
          {/* {logSign.map((item) => (
              <ListItem 
              sx={{marginLeft: 20}}
                key={item.text}
                button
                // onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
          ))} */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;